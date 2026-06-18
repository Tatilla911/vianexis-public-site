import { cn } from "@/lib/utils";

type DisclaimerBoxProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function DisclaimerBox({
  title = "Fontos tudnivaló",
  children,
  className,
}: DisclaimerBoxProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-deep-blue/15 bg-white p-5 shadow-sm",
        className,
      )}
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-deep-blue">
        {title}
      </p>
      <div className="text-sm leading-relaxed text-text/80">{children}</div>
    </div>
  );
}
