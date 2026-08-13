import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/aya-logo.png.asset.json";
import heroAsset from "@/assets/aya-hero-wide.jpg.asset.json";
import sobreImg from "@/assets/gen-sobre.jpg";
import sinergiaImg from "@/assets/gen-sinergia.jpg";
import sinergiaRotuloImg from "@/assets/gen-sinergia-apresentacao.jpg";
import repelenteImg from "@/assets/gen-repelente.jpg";
import preparoAsset from "@/assets/aya-preparo-wide.jpg.asset.json";
import ctaAsset from "@/assets/aya-cta-wide.jpg.asset.json";

const logoImg = logoAsset.url;
const heroImg = heroAsset.url;
const preparoImg = preparoAsset.url;
const ctaImg = ctaAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Armazém Aya — Produtos artesanais, naturais e conscientes" },
      {
        name: "description",
        content:
          "Sinergia de Ervas e Repelente Natural: preparos artesanais feitos com plantas frescas, saberes tradicionais e cuidado com o tempo de cada processo.",
      },
      { property: "og:title", content: "Armazém Aya" },
      {
        property: "og:description",
        content: "Produtos que convidam a viver com consciência.",
      },
    ],
  }),
  component: Index,
});

// Links da Shopee a serem preenchidos posteriormente.
const SHOPEE_SINERGIA = "#";
const SHOPEE_REPELENTE = "#";

function Dot() {
  return <span className="mx-2 text-clay">•</span>;
}

function ShopeeButton({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-moss px-8 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:bg-earth ${className}`}
    >
      Comprar na Shopee
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Dois frascos da Sinergia de Ervas na mata, em luz dourada de fim de tarde"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-earth/55" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
          <img
            src={logoImg}
            alt="Logotipo Armazém Aya"
            width={720}
            height={720}
            className="w-40 sm:w-52"
          />
          <h1 className="sr-only">Armazém Aya</h1>
          <p className="mt-5 text-[0.7rem] tracking-[0.3em] uppercase text-background/80">
            Conscientes <Dot /> Artesanais <Dot /> Naturais
          </p>
          <p className="mt-10 font-display text-2xl italic leading-snug text-background sm:text-3xl">
            Produtos que convidam a viver com consciência.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/85 sm:text-base">
            Criamos produtos artesanais a partir da relação com as plantas, a natureza e os
            saberes que atravessam gerações.
          </p>
          <a
            href="#produtos"
            className="mt-12 inline-flex items-center justify-center border border-background/60 px-9 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-background transition-colors hover:bg-background hover:text-earth"
          >
            Conheça os produtos
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Sobre</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              Um armazém de saberes, plantas e cuidado.
            </h2>
            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                O Armazém Aya nasceu do desejo de resgatar uma relação mais simples e consciente
                com aquilo que usamos no dia a dia.
              </p>
              <p>Aya fala de alma, essência e presença.</p>
              <p>
                Criamos produtos artesanais inspirados na natureza e em saberes tradicionais,
                utilizando plantas, ingredientes naturais e processos feitos com cuidado.
              </p>
              <p>
                Mais do que produtos, queremos oferecer pequenas possibilidades de reconexão com a
                natureza dentro da vida cotidiana.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={sobreImg}
              alt="Frasco da Sinergia de Ervas segurado na mão, com o verso do rótulo em evidência"
              width={1080}
              height={1080}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="paper scroll-mt-10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Produtos</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
            Feitos para fazer parte do cotidiano.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            Conheça nossas primeiras criações: preparos artesanais que nascem da relação entre
            plantas, cuidado e intenção.
          </p>
        </div>

        {/* Produto 1 */}
        <article
          id="sinergia"
          className="mx-auto mt-20 grid max-w-6xl scroll-mt-10 items-center gap-12 bg-card p-6 sm:p-10 md:grid-cols-2 md:gap-16"
        >
          <img
            src={sinergiaImg}
            alt="Frasco âmbar de 100 ml da Sinergia de Ervas com rótulo verde e laço de sisal"
            width={1080}
            height={1080}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div>
            <p className="eyebrow">Produto 01</p>
            <h3 className="mt-4 text-3xl leading-tight">Sinergia de Ervas</h3>
            <p className="mt-3 text-sm italic text-olive">
              Macerado de ervas frescas • Aura e Ambiente
            </p>
            <div className="mt-7 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                Uma sinergia botânica criada a partir da maceração de ervas frescas em álcool de
                cereais.
              </p>
              <p>
                Seu propósito não é simplesmente perfumar o ambiente, mas trabalhar a dimensão
                energética dos espaços e da atmosfera ao nosso redor.
              </p>
              <p>
                A combinação das plantas é preparada de forma artesanal, respeitando o tempo de
                maceração e a força de cada erva.
              </p>
            </div>

            <p className="mt-8 text-[0.7rem] tracking-[0.22em] uppercase text-earth">
              Plantas <Dot /> Presença <Dot /> Ambiente <Dot /> Energia
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow">Como utilizar</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                Borrife no ambiente ou ao seu redor quando sentir necessidade de renovar a
                atmosfera, favorecer uma sensação de limpeza e trazer presença ao espaço.
              </p>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="eyebrow">Composição</p>
              <p className="mt-3 font-display text-xl">Ervas frescas + álcool de cereais</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A composição botânica pode variar conforme a sinergia disponível.
              </p>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="eyebrow">Apresentação</p>
              <p className="mt-3 text-[0.95rem] text-muted-foreground">
                Frasco âmbar de 100 ml com válvula spray preta.
              </p>
            </div>

            <img
              src={sinergiaRotuloImg}
              alt="Frasco âmbar da Sinergia de Ervas sobre pedra musgosa na mata, em luz dourada"
              width={1080}
              height={1080}
              loading="lazy"
              className="mt-8 h-56 w-full object-cover sm:h-64"
            />

            <ShopeeButton href={SHOPEE_SINERGIA} className="mt-9 w-full sm:w-auto" />
          </div>
        </article>

        {/* Produto 2 */}
        <article
          id="repelente"
          className="mx-auto mt-12 grid max-w-6xl scroll-mt-10 items-center gap-12 bg-card p-6 sm:p-10 md:grid-cols-2 md:gap-16"
        >
          <img
            src={repelenteImg}
            alt="Frasco do Repelente Natural Bifásico do Armazém Aya sobre tronco de madeira"
            width={1062}
            height={1416}
            loading="lazy"
            className="h-full w-full object-cover md:order-2"
          />
          <div className="md:order-1">
            <p className="eyebrow">Produto 02</p>
            <h3 className="mt-4 text-3xl leading-tight">Repelente Natural</h3>
            <div className="mt-7 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                Um repelente artesanal desenvolvido a partir de plantas tradicionalmente utilizadas
                para auxiliar na proteção contra insetos.
              </p>
              <p>
                A fórmula utiliza macerados de cravo-da-índia e canela, combinados com óleo de
                gergelim.
              </p>
              <p>
                O cravo-da-índia e a canela são plantas aromáticas tradicionalmente utilizadas na
                preparação de soluções naturais destinadas a afastar insetos. O óleo de gergelim
                atua como veículo oleoso, contribuindo para a aplicação do preparado sobre a pele.
              </p>
            </div>

            <p className="mt-8 text-[0.7rem] tracking-[0.22em] uppercase text-earth">
              Cravo-da-índia <Dot /> Canela <Dot /> Óleo de gergelim
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow">Características</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                {[
                  "Artesanal",
                  "Preparado com ingredientes de origem vegetal",
                  "Aroma proveniente das próprias plantas",
                  "Feito em pequenos lotes",
                  "Frasco âmbar",
                  "Pensado para uma rotina mais natural",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="eyebrow">Apresentação</p>
              <p className="mt-3 font-display text-xl">100 ml — frasco âmbar com spray</p>
            </div>

            <ShopeeButton href={SHOPEE_REPELENTE} className="mt-9 w-full sm:w-auto" />
          </div>
        </article>
      </section>

      {/* FILOSOFIA DO FAZER */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Filosofia do fazer</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Da planta ao preparo.</h2>
            <div className="mt-7 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>Cada produto começa antes do frasco.</p>
              <p>
                Começa na escolha das plantas, na observação da natureza, no cuidado com a
                matéria-prima e no respeito ao tempo de cada preparo.
              </p>
              <p>
                Trabalhamos em pequena escala, valorizando processos artesanais e uma relação mais
                próxima com aquilo que produzimos.
              </p>
            </div>
          </div>

          <img
            src={preparoImg}
            alt="Frascos do Repelente Natural Bifásico sobre madeira rústica na grama, em luz dourada"
            width={1920}
            height={1080}
            loading="lazy"
            className="mt-14 h-[280px] w-full object-cover sm:h-[420px]"
          />

          <ol className="mt-14 grid grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
            {["Planta", "Preparo", "Tempo", "Produto"].map((step, i) => (
              <li key={step} className="bg-background px-6 py-10 text-center">
                <span className="eyebrow">0{i + 1}</span>
                <p className="mt-3 font-display text-2xl">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ARTESANAL DE VERDADE */}
      <section className="paper px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center">Artesanal de verdade</p>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pequenos lotes", "Produção artesanal e cuidadosa."],
              [
                "Plantas e ingredientes selecionados",
                "Escolha consciente das matérias-primas.",
              ],
              ["Processos manuais", "Cada preparo passa pelas nossas mãos."],
              [
                "Relação com a natureza",
                "Produtos inspirados nos ciclos e saberes das plantas.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-earth/25 pt-6">
                <h3 className="text-xl leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <img
          src={ctaImg}
          alt="Sinergia de Ervas e Repelente Natural juntos sobre mesa de madeira, com ervas frescas"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-40">
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Escolha o que faz sentido para o seu cotidiano.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            Conheça nossas criações e leve um pouco dessa relação com a natureza para a sua
            rotina.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SHOPEE_SINERGIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-moss px-8 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:bg-earth sm:w-auto"
            >
              Conhecer a sinergia
            </a>
            <a
              href={SHOPEE_REPELENTE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center border border-earth/40 px-8 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-earth transition-colors hover:bg-earth hover:text-background sm:w-auto"
            >
              Conhecer o repelente
            </a>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-earth px-6 py-20 text-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-2xl tracking-[0.14em] font-display">ARMAZÉM AYA</p>
              <p className="mt-4 text-[0.7rem] tracking-[0.28em] uppercase text-background/70">
                conscientes • artesanais • naturais
              </p>
              <p className="mt-6 font-display text-xl italic text-background/90">
                Produtos que convidam a viver com consciência.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[0.7rem] tracking-[0.28em] uppercase text-background/60">
                  Onde nos encontrar
                </p>
                <ul className="mt-4 space-y-2 text-sm text-background/85">
                  <li>
                    <a href="#" className="transition-opacity hover:opacity-70">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-opacity hover:opacity-70">
                      Shopee
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-opacity hover:opacity-70">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.28em] uppercase text-background/60">
                  Contato e informações
                </p>
                <ul className="mt-4 space-y-2 text-sm text-background/85">
                  <li>Contato: a preencher</li>
                  <li>Informações legais: a preencher</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-16 border-t border-background/20 pt-6 text-xs text-background/60">
            © {new Date().getFullYear()} Armazém Aya
          </p>
        </div>
      </footer>
    </main>
  );
}
