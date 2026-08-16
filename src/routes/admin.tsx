import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Acesso de edição — Armazém Aya" },
      {
        name: "description",
        content: "Área de acesso para edição dos textos do site do Armazém Aya.",
      },
      { property: "og:title", content: "Acesso de edição — Armazém Aya" },
      { property: "og:description", content: "Entre para editar os textos do site." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminAuth,
});

function AdminAuth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session) void supabase.rpc("claim_admin");
    });
  }, []);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }
    }

    const { data: session } = await supabase.auth.getSession();
    if (!session.session) {
      setMessage("Conta criada. Confirme o e-mail e depois faça login.");
      setLoading(false);
      return;
    }

    await supabase.rpc("claim_admin");
    setLoading(false);
    void navigate({ to: "/" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <div className="w-full max-w-sm">
        <p className="eyebrow">Armazém Aya</p>
        <h1 className="mt-4 text-3xl leading-tight">Editar o site</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Entre com a sua conta para ativar o modo de edição dos textos da página.
        </p>

        <form onSubmit={handle} className="mt-8 space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-moss"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-moss"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-moss px-8 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:bg-earth disabled:opacity-60"
          >
            {loading ? "Aguarde…" : mode === "login" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-clay">{message}</p>}

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground hover:text-earth"
        >
          {mode === "login" ? "Criar a primeira conta" : "Já tenho conta"}
        </button>
      </div>
    </main>
  );
}
