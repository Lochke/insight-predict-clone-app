
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", current: 4000, previous: 2400 },
  { month: "Feb", current: 3000, previous: 1398 },
  { month: "Mar", current: 2000, previous: 9800 },
  { month: "Apr", current: 2780, previous: 3908 },
  { month: "May", current: 1890, previous: 4800 },
  { month: "Jun", current: 2390, previous: 3800 },
  { month: "Jul", current: 3490, previous: 4300 },
  { month: "Aug", current: 3490, previous: 4300 },
  { month: "Sep", current: 3490, previous: 4300 },
];

const barData = [
  { name: "Category A", value: 4000, prediction: 4400 },
  { name: "Category B", value: 3000, prediction: 3200 },
  { name: "Category C", value: 2000, prediction: 2800 },
  { name: "Category D", value: 2780, prediction: 2900 },
  { name: "Category E", value: 1890, prediction: 2300 },
  { name: "Category F", value: 2390, prediction: 2500 },
];

interface DataVisualizerProps {
  className?: string;
}

export function DataVisualizer({ className }: DataVisualizerProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="col-span-1">
          <CardHeader className="pb-0">
            <CardTitle className="text-base">Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="current"
                  name="Current"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  name="Previous"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-0">
            <CardTitle className="text-base">Category Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Actual" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                <Bar dataKey="prediction" name="Predicted" fill="#7dd3fc" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
