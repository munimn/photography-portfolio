import AnimatedSection from "@/components/AnimatedSection";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio | FujiXMunsnaps",
  description: "Wedding and portrait photography by Nafis Ahmed Munim.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-cream-dark">
        <div className="container-main text-center">
          <AnimatedSection>
            <p className="section-label mb-6">Selected work</p>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal text-espresso mb-6">
              Portfolio
            </h1>
            <p className="font-lato text-base text-taupe max-w-md mx-auto leading-relaxed">
              A collection of real moments — wedding days, quiet portraits,
              and everything beautiful in between.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Horizontal rule */}
      <div className="h-px bg-cream-border" />

      {/* Portfolio Grid with filter */}
      <PortfolioGrid />
    </>
  );
}
