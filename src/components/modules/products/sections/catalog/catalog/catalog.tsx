"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import useProductsCatalog
  from "./hooks/use-products-catalog";

import ProductsSidebar
  from "../products-sidebar/products-sidebar";

import ProductSearch
  from "../ProductSearch";

import ProductFilters
  from "../ProductFilters";

import ProductsContent
  from "../products-content";

import ProductsHeader
  from "../products-header";

import ProductsGrid
  from "../grid-products";

import Pagination
  from "@/components/ui/pagination";

export default function Catalog() {
  const {
    search,
    setSearch,

    sorting,
    setSorting,

    selectedFilters,
    handleFilterChange,

    filterGroups,

    filteredProducts,
    paginatedProducts,

    currentPage,
    totalPages,
    setCurrentPage,
  } = useProductsCatalog();

  return (
    <Section id="catalog">
      <Container>
        <div
          className="
            grid
            gap-12
mt-10
            lg:grid-cols-[320px_1fr]
          "
        >
          <ProductsSidebar>
            <ProductSearch
              value={search}
              onChange={setSearch}
            />

            <ProductFilters
              groups={filterGroups}
              selectedFilters={
                selectedFilters
              }
              onFilterChange={
                handleFilterChange
              }
            />
          </ProductsSidebar>

          <ProductsContent>
            <div className="px-10">
              <ProductsHeader
                count={
                  filteredProducts.length
                }
                sorting={sorting}
                onSortingChange={
                  setSorting
                }
              /></div>

            <ProductsGrid
              products={
                paginatedProducts
              }
            />

            <div
              className="
    mt-12
    flex
    justify-center
  "
            >
              <Pagination
                variant="floating"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </ProductsContent>
        </div>
      </Container>
    </Section>
  );
}