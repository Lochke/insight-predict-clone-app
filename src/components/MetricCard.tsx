
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string | number;
  isPositive?: boolean;
  description?: string;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  isPositive = true,
  description,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div
            className={cn(
              "flex items-center mt-1 text-xs",
              isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            <span>
              {isPositive && "+"}
              {change}
            </span>
          </div>
        )}
      </CardContent>
      {description && (
        <CardFooter className="pt-1 pb-2">
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardFooter>
      )}
    </Card>
  );
}
