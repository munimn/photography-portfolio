import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";

const featuredPhotos = [
  {
    id: 1,
    src: "https://picsum.photos/seed/wed1/1200/800",
    title: "First Dance",
    category: "Wedding",
    span: "col-span-2",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/por1/800/800",
    title: "Golden Hour",
    category: "Portrait",
    span: "",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/wed3/800/800",
    title: "Garden Vows",
    category: "Wedding",
    span: "",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/por2/800/800",
    title: "Natural Light",
    category: "Portrait",
    span: "",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/wed5/800/800",
    title: "Chapel Moments",
    category: "Wedding",
    span: "",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/por3/1600/800",
    title: "City Dreams",
    category: "Portrait",
    span: "col-span-2 md:col-span-3",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Introduction */}
      <section className="py-28 bg-cream">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <p className="section-label mb-6">About the photographer</p>
              <h2 className="section-title mb-8">
                Stories told through<br />light &amp; emotion
              </h2>
              <p className="font-lato text-base leading-8 text-taupe mb-6">
                Hi, I&apos;m <span className="text-espresso font-medium">Nafis Ahmed Munim</span> — the
                person behind FujiXMunsnaps. I believe every moment holds a universe of feeling:
                the nervous laugh before the first kiss, the quiet joy in a glance between two people,
                the way light finds its way in at just the right second.
              </p>
              <p className="font-lato text-base leading-8 text-taupe mb-10">
                My job isn&apos;t to pose you — it&apos;s to watch, wait, and witness. You live it.
                I&apos;ll capture it.
              </p>
              <Link href="/about" className="btn-secondary">
                My Story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/intro1/800/1067"
                    alt="Nafis Ahmed Munim photography"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-8 -left-8 bg-cream-dark px-8 py-6 shadow-lg">
                  <p className="font-playfair text-3xl text-espresso">2+</p>
                  <p className="section-label mt-1">Years of passion</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-cream-dark">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-4">What I offer</p>
            <h2 className="section-title">Specialisations</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Weddings */}
            <AnimatedSection delay={0.1}>
              <div className="group relative overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://picsum.photos/seed/service-wed/1200/900"
                    alt="Wedding photography"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="section-label text-cream/60 mb-3">Specialisation</p>
                  <h3 className="font-playfair text-3xl text-cream mb-3">Weddings</h3>
                  <p className="font-lato text-sm text-cream/70 leading-relaxed mb-6 max-w-sm">
                    Your day, preserved forever. From the quiet preparations to the last dance —
                    every emotion, every glance, every tear of joy.
                  </p>
                  <Link href="/portfolio" className="btn-ghost text-xs">
                    View Wedding Work
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Portraits */}
            <AnimatedSection delay={0.2}>
              <div className="group relative overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://picsum.photos/seed/service-por/1200/900"
                    alt="Portrait photography"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="section-label text-cream/60 mb-3">Specialisation</p>
                  <h3 className="font-playfair text-3xl text-cream mb-3">Portraits</h3>
                  <p className="font-lato text-sm text-cream/70 leading-relaxed mb-6 max-w-sm">
                    There&apos;s a version of you that the world rarely sees. Raw, unguarded, beautifully
                    real. That&apos;s the version I photograph.
                  </p>
                  <Link href="/portfolio" className="btn-ghost text-xs">
                    View Portrait Work
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-28 bg-cream">
        <div className="container-main">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="section-label mb-4">Selected work</p>
              <h2 className="section-title">Featured moments</h2>
            </div>
            <Link href="/portfolio" className="btn-secondary shrink-0">
              Full Portfolio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[280px]">
            {featuredPhotos.map((photo, i) => (
              <AnimatedSection key={photo.id} delay={i * 0.08} className={`${photo.span} h-full`}>
                <div className="group relative h-full overflow-hidden cursor-pointer">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-colors duration-400" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className="section-label text-cream/80 mb-2">{photo.category}</p>
                    <p className="font-playfair text-xl text-cream">{photo.title}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-espresso relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/cta-bg/1920/600"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container-main text-center">
          <AnimatedSection>
            <p className="section-label text-terracotta-light mb-6">Ready to begin?</p>
            <h2 className="font-playfair text-4xl md:text-6xl text-cream font-normal mb-6 leading-tight">
              Let&apos;s create your<br />forever story
            </h2>
            <p className="font-lato text-base text-cream/60 mb-12 max-w-lg mx-auto leading-relaxed">
              Whether it&apos;s a wedding day or a quiet afternoon in golden light —
              reach out and let&apos;s talk about what you&apos;re envisioning.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
