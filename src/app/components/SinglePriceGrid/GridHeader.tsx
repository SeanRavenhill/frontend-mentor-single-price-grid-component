interface GridHeaderProps {
  title: string;
  subTitle: string;
  copy: string;
}

export function GridHeader({ title, subTitle, copy }: GridHeaderProps) {
  return (
    <header className="bg-primaryWhite col-span-4 px-6 pt-7 pb-8 sm:col-span-4">
      <h2
        id="grid-header-title"
        className="text-primaryCyan mb-6 text-xl font-bold tracking-tight sm:text-2xl sm:tracking-normal"
      >
        {title}
      </h2>
      <p className="text-primaryYellow mb-4 text-[0.9375rem] leading-tight font-bold sm:mb-2.5 sm:text-lg sm:leading-normal">
        {subTitle}
      </p>
      <p className="text-neutralBlue text-sm leading-relaxed font-normal sm:text-base sm:whitespace-pre-wrap">
        {copy}
      </p>
    </header>
  );
}
