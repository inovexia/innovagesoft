import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowRightIcon } from "@/components/ui/icons";
import { formatDate } from "@/lib/format";
import { postBySlug, posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = postBySlug((await params).slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative isolate overflow-hidden border-b border-hairline">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-accent opacity-[0.13] blur-[100px]"
          />
          <div className="mx-auto w-[min(100%-2rem,52rem)] pb-14 pt-32 md:pb-16 md:pt-40">
            <Reveal>
              <Link
                href="/blog"
                className="text-[0.85rem] font-bold text-muted transition-colors duration-200 hover:text-accent"
              >
                ← All articles
              </Link>
            </Reveal>

            <Reveal delay={60}>
              <p className="mt-6 flex flex-wrap items-center gap-x-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-accent">
                {post.category}
                <span className="text-muted" aria-hidden="true">·</span>
                <time className="text-muted" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span className="text-muted" aria-hidden="true">·</span>
                <span className="text-muted">{post.readingTime}</span>
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 text-[1.15rem] leading-[1.6] text-muted">
                {post.excerpt}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto w-[min(100%-2rem,52rem)] py-14 md:py-20">
          <Reveal>
            <Photo
              name={post.image}
              alt={post.imageAlt}
              ratio="aspect-[16/9]"
              sizes="(max-width: 832px) 100vw, 52rem"
              priority
            />
          </Reveal>

          <div className="mt-14 grid gap-12">
            {post.body.map((section, i) => (
              <Reveal key={section.heading} delay={i * 50}>
                <section>
                  <h2 className="text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-[1.2] tracking-[-0.02em]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 grid gap-5">
                    {section.paragraphs.map((para) => (
                      <p key={para} className="text-[1.05rem] leading-[1.8] text-muted">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <Section tinted>
        <Reveal>
          <Eyebrow>Keep reading</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-bg p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
              >
                <p className="text-[0.74rem] font-bold uppercase tracking-[0.12em] text-accent">
                  {p.category}
                </p>
                <h3 className="mt-3 flex-1 text-[1.05rem] font-extrabold leading-[1.28] tracking-[-0.02em]">
                  {p.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-bold text-accent">
                  Read
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
