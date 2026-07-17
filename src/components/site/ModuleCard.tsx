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

export function ModuleCard({ module, labels, className }: ModuleCardProps) {
  return (
    <article
      id={module.id}
      className={cn("panel-glass rounded-md p-6", className)}
    >
      <div className="accent-beam mb-4" aria-hidden="true" />
      <h3 className="text-lg font-semibold text-white">{module.title}</h3>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-grey">
        <div>
          <dt className="font-medium text-gold-core">{labels.goal}</dt>
          <dd className="mt-1">{module.goal}</dd>
        </div>
        <div>
          <dt className="font-medium text-gold-core">{labels.appFoundation}</dt>
          <dd className="mt-1">{module.appFoundation}</dd>
        </div>
        {module.backendDependency && (
          <div>
            <dt className="font-medium text-gold-core">
              {labels.backendDependency}
            </dt>
            <dd className="mt-1">{module.backendDependency}</dd>
          </div>
        )}
      </dl>
      {module.disclaimer && (
        <DisclaimerBox className="mt-4" title={labels.important}>
          <p>{module.disclaimer}</p>
        </DisclaimerBox>
      )}
    </article>
  );
}
