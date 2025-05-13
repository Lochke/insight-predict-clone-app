
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BarChart3,
  LineChart,
  TrendingUp,
  Home,
  Settings,
  FileText,
  AreaChart,
  Database,
  PieChart,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-screen w-64 border-r border-border bg-sidebar text-sidebar-foreground",
        className
      )}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-insight-500 to-insight-700 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">InsightPredict</span>
        </div>
      </div>
      <div className="flex-1 py-4 px-2 space-y-1 overflow-auto">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-sidebar-foreground/70">
            Overview
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/insights">
                <TrendingUp className="h-4 w-4" />
                Insights
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/reports">
                <FileText className="h-4 w-4" />
                Reports
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-sidebar-foreground/70">
            Analytics
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/performance">
                <BarChart3 className="h-4 w-4" />
                Performance
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/trends">
                <LineChart className="h-4 w-4" />
                Trends
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/distribution">
                <PieChart className="h-4 w-4" />
                Distribution
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-sidebar-foreground/70">
            Predictions
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/forecast">
                <AreaChart className="h-4 w-4" />
                Forecast
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground gap-2"
              asChild
            >
              <Link to="/data-models">
                <Database className="h-4 w-4" />
                Data Models
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-sidebar-foreground"
          asChild
        >
          <Link to="/settings">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  );
}
