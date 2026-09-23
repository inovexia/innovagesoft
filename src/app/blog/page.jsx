import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowRightIcon } from "@/components/ui/icons";
import { formatDate } from "@/lib/format";
import { posts } from "@/lib/site";

export const metadata = {
  title: "Blog",
  description:
    "Plain-spoken writing on custom software, discovery, AI automation and keeping a web product healthy — from the team that builds them.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="What we've learned building this stuff."
        intro="No thought leadership, no trend roundups. Just the things we find ourselves explaining to clients often enough that they are worth writing down."
        media={
          <Photo
            name="notes-laptop"
            alt="Hands taking notes beside a laptop"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      />

      <Section>
        {/* Lead article, given the full width */}
        <Reveal>
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid gap-8 rounded-3xl border border-hairline bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] md:grid-cols-2 md:gap-10 md:p-8"
          >
            <Photo
              name={lead.image}
              alt={lead.imageAlt}
              ratio="aspect-[16/10]"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="flex flex-col justify-center">
              <p className="flex flex-wrap items-center gap-x-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-accent">
                {lead.category}
                <span className="text-muted" aria-hidden="true">·</span>
                <span className="text-muted">{formatDate(lead.date)}</span>
                <span className="text-muted" aria-hidden="true">·</span>
                <span className="text-muted">{lead.readingTime}</span>
              </p>
              <h2 className="mt-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold leading-[1.14] tracking-[-0.025em]">
                {lead.title}
              </h2>
              <p className="mt-4 max-w-[52ch] leading-[1.7] text-muted">{lead.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-accent">
                Read the article
                <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
              >
                <Photo
                  name={post.image}
                  alt={post.imageAlt}
                  ratio="aspect-[16/9]"
                  rounded="rounded-none"
                  className="border-0 border-b border-hairline"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex flex-wrap items-center gap-x-2 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-accent">
                    {post.category}
                    <span className="text-muted" aria-hidden="true">·</span>
                    <span className="text-muted">{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 text-[1.15rem] font-extrabold leading-[1.25] tracking-[-0.02em]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-[1.65] text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 border-t border-hairline pt-4 text-[0.85rem] text-muted">
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand heading="Got a question we haven't written about?" body="Ask it directly. We would rather answer a real question than publish another listicle." />
    </>
  );
}
