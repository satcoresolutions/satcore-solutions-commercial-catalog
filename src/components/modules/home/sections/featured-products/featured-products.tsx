import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import FeaturedProductsContent
  from "./components/featured-products-content";

import FeaturedProductsGrid
  from "./components/featured-products-grid";

import FeaturedProductsActions
  from "./components/featured-products-actions";

export default function FeaturedProducts() {
  return (
    <Section
      id="featured-products"
      spacing="xl"
      className="my-10"
    >
      <Container>
        <FeaturedProductsContent />

        <FeaturedProductsGrid />

        <FeaturedProductsActions />
      </Container>
    </Section>
  );
}