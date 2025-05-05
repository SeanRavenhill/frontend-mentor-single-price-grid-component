import SinglePriceGrid from "@/components/SinglePriceGrid";

import data from "@/db/data.json";

export default function Home() {
  return (
    <main className="flex h-dvh w-full">
      <section className="flex min-h-fit flex-auto items-center justify-center">
        <SinglePriceGrid data={data} />
      </section>
    </main>
  );
}
