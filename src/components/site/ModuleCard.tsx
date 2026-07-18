import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import type { PlatformModule } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type ModuleLabels = {
  goal: string;
  appFoundation: string;
  backendDependency: string;
  important: string;
};

type ModuleCardProps = {
  module: PlatformModule;
  labels: ModuleLabels;
  className?: string;
};

/** Public module summary — goal only; no internal dependency lists. */
export function ModuleCard({ module, labels, className }: ModuleCardProps) {
  return (
    <article
      id={module.id}
      className={cn("panel-glass rounded-md p-6", className)}
    >
      <div className="accent-beam mb-4" aria-hidden="true" />
      <h3 className="text-card-title text-white">{module.title}</h3>
      <p className="text-body mt-3 text-neutral-grey">{module.goal}</p>
      {module.disclaimer ? (
        <DisclaimerBox className="mt-4" title={labels.important}>
          <p>{module.disclaimer}</p>
        </DisclaimerBox>
      ) : null}
    </article>
  );
}
