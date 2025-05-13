
import React from "react";
import { MetricCard } from "./MetricCard";
import { DataVisualizer } from "./DataVisualizer";
import { PredictionForm } from "./PredictionForm";

export function Dashboard() {
  return (
    <div className="flex-1 p-6 overflow-auto animate-fade-in">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your analytics and prediction dashboard
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 animate-slide-up">
          <MetricCard 
            title="Total Revenue" 
            value="$24,563" 
            change="12%" 
            isPositive={true}
            description="Compared to previous period" 
          />
          <MetricCard 
            title="Conversion Rate" 
            value="3.6%" 
            change="0.8%" 
            isPositive={true}
            description="Compared to previous period" 
          />
          <MetricCard 
            title="Average Order Value" 
            value="$59.82" 
            change="2.4%" 
            isPositive={true}
            description="Compared to previous period" 
          />
          <MetricCard 
            title="Churn Rate" 
            value="2.3%" 
            change="0.5%" 
            isPositive={false}
            description="Compared to previous period" 
          />
        </div>

        <DataVisualizer />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
            <div className="bg-card border rounded-lg p-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-insight-100 flex items-center justify-center text-insight-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Revenue Growth Trend</h3>
                  <p className="text-sm text-muted-foreground">
                    Revenue has increased by 12% compared to the previous period, with the most significant growth in the premium subscription tier.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-insight-100 flex items-center justify-center text-insight-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Customer Acquisition</h3>
                  <p className="text-sm text-muted-foreground">
                    New customer acquisition cost has decreased by 8%, while the retention rate has improved to 85% from 78% last quarter.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-insight-100 flex items-center justify-center text-insight-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Market Expansion Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    Data suggests potential for 15-20% growth if services are expanded to the European market in the next quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <PredictionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
