"use client";

import { Button } from "@/components/ui/Button/Button";

interface PricingCardProps {
  title: string;
  price: string;
  term: string;
  caption: string;
}

export function PricingCard({ title, price, term, caption }: PricingCardProps) {
  const handleClick = () => {
    // TODO: This would need to be wired up to sign up logic etc.
    console.log("Clickable");
  };

  return (
    <div className="bg-primaryCyan col-span-4 p-6 sm:col-span-2 sm:p-10">
      <h3 className="text-primaryWhite mb-[1.125rem] text-lg font-bold">
        {title}
      </h3>
      <div className="mb-1 flex flex-row items-center gap-2.5">
        <div className="text-primaryWhite text-[2rem] leading-none font-bold">
          {price}
        </div>
        <div className="text-primaryWhite text-base leading-relaxed font-normal opacity-50">
          {term}
        </div>
      </div>
      <div className="text-primaryWhite mb-[1.625rem] text-base leading-relaxed font-normal">
        {caption}
      </div>
      <Button onClick={handleClick} type={"submit"}>
        Sign Up
      </Button>
    </div>
  );
}
