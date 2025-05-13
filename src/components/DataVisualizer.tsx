
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const ratingTrendData = [
  { month: "T1", current: 4.0, previous: 3.7 },
  { month: "T2", current: 4.1, previous: 3.8 },
  { month: "T3", current: 3.9, previous: 3.6 },
  { month: "T4", current: 4.2, previous: 3.9 },
  { month: "T5", current: 4.1, previous: 3.7 },
  { month: "T6", current: 4.3, previous: 3.8 },
  { month: "T7", current: 4.2, previous: 3.9 },
  { month: "T8", current: 4.3, previous: 4.0 },
  { month: "T9", current: 4.2, previous: 4.0 },
];

const categoryData = [
  { name: "Nội dung", value: 4.3, target: 4.5 },
  { name: "Giảng viên", value: 4.5, target: 4.5 },
  { name: "Tài liệu", value: 3.8, target: 4.5 },
  { name: "Cơ sở vật chất", value: 3.5, target: 4.0 },
  { name: "Hỗ trợ", value: 4.0, target: 4.5 },
  { name: "Đánh giá", value: 4.2, target: 4.3 },
];

const skillsData = [
  { subject: 'Kiến thức', A: 4.5, fullMark: 5 },
  { subject: 'Thực hành', A: 3.8, fullMark: 5 },
  { subject: 'Tư duy', A: 4.2, fullMark: 5 },
  { subject: 'Kỹ năng mềm', A: 3.6, fullMark: 5 },
  { subject: 'Giải quyết vấn đề', A: 4.1, fullMark: 5 },
  { subject: 'Làm việc nhóm', A: 3.9, fullMark: 5 },
];

interface DataVisualizerProps {
  className?: string;
}

export function DataVisualizer({ className }: DataVisualizerProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-0">
            <CardTitle className="text-base">Xu hướng đánh giá theo thời gian</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ratingTrendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="current"
                  name="Kỳ hiện tại"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  name="Kỳ trước"
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
            <CardTitle className="text-base">Đánh giá kỹ năng</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, 5]} />
                <Radar name="Điểm đánh giá" dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-0">
          <CardTitle className="text-base">Đánh giá theo danh mục</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" name="Điểm đánh giá" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" name="Mục tiêu" fill="#7dd3fc" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
