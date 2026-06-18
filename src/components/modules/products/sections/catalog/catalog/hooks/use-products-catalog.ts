"use client";

import {
  productsData,
} from "@/data/products";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  catalogContent,
} from "../content/catalog.content";

import useProductsSearch
  from "./use-products-search";

import useProductsFilters
  from "./use-products-filters";

import useProductsSorting
  from "./use-products-sorting";

import useProductsPagination
  from "./use-products-pagination";

export default function useProductsCatalog() {
  const lang =
    useLanguage();

  const content =
    catalogContent[lang];

  const {
    search,
    setSearch,
  } = useProductsSearch();

  const {
    sorting,
    setSorting,
  } = useProductsSorting();

  const {
    selectedFilters,
    handleFilterChange,
  } = useProductsFilters();

  const filterGroups = [
    {
      id: "categories",

      title:
        content.filters.categories.title,

      options:
        content.filters.categories.options,
    },
  ];

  const filteredProducts =
    productsData.filter(
      (product) => {
        const translation =
          product.translations[
            lang
          ];

        const matchesSearch =
          search.trim() === ""
            ? true
            : translation.title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                );

        const matchesCategory =
          selectedFilters.length === 0
            ? true
            : selectedFilters.includes(
                translation.category
              );

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  const sortedProducts = [
    ...filteredProducts,
  ];

  switch (sorting) {
    case "name-asc":
      sortedProducts.sort(
        (a, b) =>
          a.translations[
            lang
          ].title.localeCompare(
            b.translations[
              lang
            ].title
          )
      );
      break;

    case "name-desc":
      sortedProducts.sort(
        (a, b) =>
          b.translations[
            lang
          ].title.localeCompare(
            a.translations[
              lang
            ].title
          )
      );
      break;

    case "newest":
      sortedProducts.reverse();
      break;

    default:
      break;
  }

  const pagination =
    useProductsPagination({
      totalItems:
        sortedProducts.length,
    });

  const paginatedProducts =
    sortedProducts.slice(
      pagination.startIndex,
      pagination.endIndex
    );

  return {
    search,
    setSearch,

    sorting,
    setSorting,

    selectedFilters,
    handleFilterChange,

    filterGroups,

    filteredProducts,
    paginatedProducts,

    ...pagination,
  };
}