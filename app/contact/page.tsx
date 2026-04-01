import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | FujiXMunsnaps",
  description: "Book a wedding or portrait session with Nafis Ahmed Munim.",
};

const details = [
  {
    label: "Email",
    value: "nafis@fujixmunsnaps.com",
    href: "mailto:nafis@fujixmunsnaps.com",
  },
  {
    label: "Instagram",
    value: "@fujixmunsnaps",
    href: "#",
  },
  {
    label: "Response Time",
    value: "Within 48 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-cream-dark">
        <div className="container-main">
          <AnimatedSection>
            <p className="section-label mb-6">Let&apos;s talk</p>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal text-espresso leading-tight">
              Book a Session
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-px bg-cream-border" />

      {/* Main content */}
      <section className="py-20 bg-cream">
        <div className="container-main">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-20 lg:gap-32">
            {/* Left: Info */}
            <AnimatedSection direction="left" className="space-y-12">
              <div>
                <h2 className="font-playfair text-3xl text-espresso mb-4">
                  Let&apos;s create something beautiful together
                </h2>
                <p className="font-lato text-sm text-taupe leading-7">
                  Whether you&apos;re planning a wedding or looking for a portrait session,
                  I&apos;d love to hear about your vision. Fill out the form and I&apos;ll
                  be in touch personally.
                </p>
              </div>

              {/* Pricing note */}
              <div className="border-l-2 border-terracotta pl-6 py-2">
                <p className="font-playfair text-xl text-espresso mb-2">Pricing</p>
                <p className="font-lato text-sm text-taupe leading-7">
                  Every session is unique, and so is my pricing. I offer custom packages
                  tailored to your needs. Reach out and we&apos;ll find something that works
                  beautifully for you.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                {details.map((d) => (
                  <div key={d.label}>
                    <p className="section-label mb-1">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="font-lato text-sm text-espresso hover:text-terracotta transition-colors duration-200"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-lato text-sm text-espresso">{d.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="right" delay={0.1}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
