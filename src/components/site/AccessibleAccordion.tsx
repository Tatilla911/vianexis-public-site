"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  body: string;
};

type AccessibleAccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function AccessibleAccordion({
  items,
  className,
}: AccessibleAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const open = openIndex === index;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl border border-border bg-white"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="focus-ring flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-navy"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.title}
                <span aria-hidden="true" className="text-text-muted">
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-muted"
            >
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
