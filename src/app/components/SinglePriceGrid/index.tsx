"use client";

import { GridHeader } from "./GridHeader";
import { PricingCard } from "./PricingCard";
import { FeaturesCard } from "./FeaturesCard";
import { GridData } from "@/db/data";

interface SinglePriceGridProps {
  data: GridData;
}

export default function SinglePriceGrid({ data }: SinglePriceGridProps) {
  return (
    <div
      aria-labelledby="grid-header-title"
      className="mx-8 mt-[4.5rem] mb-[3.875rem] grid w-full max-w-[40rem] grid-cols-4 overflow-hidden rounded-md shadow-[0px_15px_30px_0px_rgba(0,81,171,0.15)] sm:rounded-lg"
    >
      <GridHeader
        title={data["grid-header"]["title"]}
        subTitle={data["grid-header"]["sub-title"]}
        copy={data["grid-header"]["copy"]}
      />
      <PricingCard
        title={data["pricing-card"]["title"]}
        price={data["pricing-card"]["price"]}
        term={data["pricing-card"]["term"]}
        caption={data["pricing-card"]["caption"]}
      />
      <FeaturesCard
        title={data["features-card"]["title"]}
        listItems={data["features-card"]["list-items"]}
      />
    </div>
  );
}
