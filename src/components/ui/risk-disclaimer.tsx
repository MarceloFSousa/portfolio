import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function RiskDisclaimer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 border border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground",
        className
      )}
    >
      <AlertTriangle size={14} className="mt-0.5 shrink-0" />
      <p>{siteConfig.riskDisclaimer}</p>
    </div>
  );
}
