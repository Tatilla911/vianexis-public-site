import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import type { PlatformModule } from "@/lib/public-content";
import { cn } from "@/lib/utils";

type ModuleCardProps = {
  module: PlatformModule;
  className?: string;
};

export function ModuleCard({ module, className }: ModuleCardProps) {
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
          <dt className="font-medium text-navy">Cél</dt>
          <dd className="mt-1">{module.goal}</dd>
        </div>
        <div>
          <dt className="font-medium text-navy">App-side foundation</dt>
          <dd className="mt-1">{module.appFoundation}</dd>
        </div>
        {module.backendDependency && (
          <div>
            <dt className="font-medium text-navy">Backend / admin dependency</dt>
            <dd className="mt-1">{module.backendDependency}</dd>
          </div>
        )}
      </dl>
      {module.disclaimer && (
        <DisclaimerBox className="mt-4" title="Fontos">
          <p>{module.disclaimer}</p>
        </DisclaimerBox>
      )}
    </article>
  );
}
