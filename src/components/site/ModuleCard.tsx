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
      className={cn(
        "rounded-xl border border-deep-blue/10 bg-white p-6 shadow-sm",
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-navy">{module.title}</h3>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed text-text/80">
        <div>
          <dt className="font-medium text-navy">{labels.goal}</dt>
          <dd className="mt-1">{module.goal}</dd>
        </div>
        <div>
          <dt className="font-medium text-navy">{labels.appFoundation}</dt>
          <dd className="mt-1">{module.appFoundation}</dd>
        </div>
        {module.backendDependency && (
          <div>
            <dt className="font-medium text-navy">{labels.backendDependency}</dt>
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
