import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";

type ContentMap = Record<string, string>;

type Ctx = {
  content: ContentMap;
  isAdmin: boolean;
  editing: boolean;
  setEditing: (v: boolean) => void;
  save: (key: string, value: string) => Promise<void>;
  saving: boolean;
};

const SiteContentContext = createContext<Ctx | null>(null);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentMap>({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;

    supabase
      .from("site_content")
      .select("key,value")
      .then(({ data }) => {
        if (!active || !data) return;
        const map: ContentMap = {};
        for (const row of data) map[row.key] = row.value;
        setContent(map);
      });

    const checkAdmin = async () => {
      const { data: sess } = await supabase.auth.getSession();
      const uid = sess.session?.user.id;
      if (!uid) {
        if (active) setIsAdmin(false);
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(!!data);
    };

    void checkAdmin();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      void checkAdmin();
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const save = useCallback(async (key: string, value: string) => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });
    setSaving(false);
    if (error) throw error;
    setContent((prev) => ({ ...prev, [key]: value }));
  }, []);

  const value = useMemo(
    () => ({ content, isAdmin, editing, setEditing, save, saving }),
    [content, isAdmin, editing, save, saving],
  );

  return (
    <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>
  );
}

function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used inside SiteContentProvider");
  return ctx;
}

export function useSiteContentState() {
  return useSiteContent();
}

/** Texto editável: exibe o valor salvo no banco ou o texto padrão do código. */
export function Ed({
  k,
  as: Tag = "span",
  children,
  className,
}: {
  k: string;
  as?: ElementType;
  children: string;
  className?: string;
}) {
  const { content, isAdmin, editing, save } = useSiteContent();
  const ref = useRef<HTMLElement>(null);
  const stored = content[k];
  const text = stored ?? children;
  const canEdit = isAdmin && editing;

  const onBlur = async () => {
    const next = (ref.current?.textContent ?? "").trim();
    if (!next || next === text) {
      if (ref.current) ref.current.textContent = text;
      return;
    }
    try {
      await save(k, next);
    } catch {
      if (ref.current) ref.current.textContent = text;
    }
  };

  return (
    <Tag
      ref={ref}
      className={
        canEdit
          ? `${className ?? ""} outline-dashed outline-1 outline-offset-4 outline-clay focus:outline-moss`
          : className
      }
      contentEditable={canEdit || undefined}
      suppressContentEditableWarning
      onBlur={canEdit ? onBlur : undefined}
      data-content-key={k}
    >
      {text}
    </Tag>
  );
}

/** Barra flutuante de edição para administradoras. */
export function EditBar() {
  const { isAdmin, editing, setEditing, saving } = useSiteContent();
  if (!isAdmin) return null;
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-earth px-5 py-3 text-background shadow-lg">
      <span className="text-[0.65rem] tracking-[0.2em] uppercase">
        {saving ? "Salvando…" : editing ? "Modo edição" : "Modo visualização"}
      </span>
      <button
        type="button"
        onClick={() => setEditing(!editing)}
        className="rounded-full bg-background px-4 py-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-earth transition-opacity hover:opacity-80"
      >
        {editing ? "Concluir" : "Editar textos"}
      </button>
      <button
        type="button"
        onClick={() => supabase.auth.signOut()}
        className="text-[0.65rem] tracking-[0.2em] uppercase text-background/70 hover:text-background"
      >
        Sair
      </button>
    </div>
  );
}
