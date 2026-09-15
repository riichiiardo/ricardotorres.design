export default function Marquee({ items, testId = "editorial-marquee" }) {
  const row = [...items, ...items];
  return (
    <div data-testid={testId} className="border-y border-border overflow-hidden py-5 select-none" aria-hidden="true">
      <div className="animate-marquee flex whitespace-nowrap w-max">
        {row.map((item, i) => (
          <span key={i} className="font-display text-lg sm:text-xl tracking-[0.2em] uppercase text-muted-foreground/70 mx-6 flex items-center gap-6">
            {item}
            <span className="text-brand text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
