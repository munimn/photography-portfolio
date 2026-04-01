import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "About | FujiXMunsnaps",
  description: "Meet Nafis Ahmed Munim — wedding and portrait photographer.",
};

const values = [
  {
    title: "Presence",
    description:
      "I don't just show up with a camera — I show up for you. Fully present, fully focused on what's unfolding.",
  },
  {
    title: "Authenticity",
    description:
      "No forced smiles. No stiff poses. Just real moments, real light, and real you.",
  },
  {
    title: "Craft",
    description:
      "Every frame is intentional. Every edit is considered. The result is an image that lasts generations.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-0 bg-cream">
        <div className="container-main">
          <AnimatedSection>
            <p className="section-label mb-6">The person behind the lens</p>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal text-espresso leading-tight max-w-3xl">
              Hi, I&apos;m Nafis.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-28 items-start">
            {/* Image */}
            <AnimatedSection direction="left" className="sticky top-28">
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/nafis-about/700/950"
                    alt="Nafis Ahmed Munim"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative line */}
                <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-cream-border -z-10" />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-8 pt-4">
                <div className="space-y-5">
                  <h2 className="font-playfair text-3xl text-espresso">My story</h2>
                  <p className="font-lato text-base text-taupe leading-8">
                    I picked up a camera because the world kept giving me moments I didn&apos;t want
                    to forget. A laugh that felt like sunlight. The look on someone&apos;s face when
                    they see the person they love walking towards them for the first time.
                  </p>
                  <p className="font-lato text-base text-taupe leading-8">
                    FujiXMunsnaps is named after my beloved Fujifilm camera — the one that
                    goes everywhere I go. There&apos;s something about the warmth and grain of
                    Fuji film that feels closest to memory. That&apos;s the feeling I want to
                    give you.
                  </p>
                  <p className="font-lato text-base text-taupe leading-8">
                    I specialise in weddings and portraits — both require the same thing:
                    trust. You have to trust me enough to forget I&apos;m there. When that
                    happens, magic follows.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-cream-border" />

                <div className="space-y-5">
                  <h2 className="font-playfair text-3xl text-espresso">My approach</h2>
                  <p className="font-lato text-base text-taupe leading-8">
                    I believe the best photographs are never manufactured — they&apos;re witnessed.
                    I move quietly, observe carefully, and react instinctively. I&apos;ll guide
                    you when you need direction and step back when you don&apos;t.
                  </p>
                  <p className="font-lato text-base text-taupe leading-8">
                    The light, the composition, the timing — all of that is my job.
                    Your only job is to be present. <em className="font-playfair text-espresso not-italic">You live it. I&apos;ll capture it.</em>
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-cream-border" />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/portfolio" className="btn-primary">
                    View My Work
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Let&apos;s Connect
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-cream-dark">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-4">What I stand for</p>
            <h2 className="section-title">My values</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="p-10 bg-cream border border-cream-border group hover:border-terracotta transition-colors duration-300">
                  <p className="font-playfair text-4xl text-terracotta/30 mb-6">0{i + 1}</p>
                  <h3 className="font-playfair text-2xl text-espresso mb-4">{v.title}</h3>
                  <p className="font-lato text-sm text-taupe leading-7">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-espresso">
        <div className="container-main text-center">
          <AnimatedSection>
            <p className="section-label text-terracotta-light mb-6">Let&apos;s work together</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream font-normal mb-6">
              Ready to create something<br />unforgettable?
            </h2>
            <p className="font-lato text-sm text-cream/60 mb-10 max-w-md mx-auto leading-relaxed">
              Contact me to discuss your vision. I&apos;d love to hear about your day
              and how I can be part of it.
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
