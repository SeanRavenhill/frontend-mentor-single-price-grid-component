interface FeaturesCardProps {
  title: string;
  listItems: string[];
}

export function FeaturesCard({ title, listItems }: FeaturesCardProps) {
  return (
    <div className="bg-primaryCyan relative col-span-4 p-6 sm:col-span-2 sm:p-10">
      <span className="bg-primaryWhite pointer-events-none absolute inset-0 opacity-15"></span>
      <h3 className="text-primaryWhite mb-[1.125rem] text-lg font-bold">
        {title}
      </h3>
      <ul className="text-primaryWhite text-sm leading-[1.25rem] font-normal opacity-75">
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
