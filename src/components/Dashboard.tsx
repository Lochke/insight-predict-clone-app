
import React from "react";
import { MetricCard } from "./MetricCard";
import { DataVisualizer } from "./DataVisualizer";
import { CourseEvaluationForm } from "./CourseEvaluationForm";
import { CourseTable } from "./CourseTable";

export function Dashboard() {
  return (
    <div className="flex-1 p-6 overflow-auto animate-fade-in">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Đánh giá khóa học</h1>
          <p className="text-muted-foreground">
            Hệ thống đánh giá và phân tích chất lượng khóa học
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 animate-slide-up">
          <MetricCard 
            title="Điểm đánh giá trung bình" 
            value="4.2/5" 
            change="0.3" 
            isPositive={true}
            description="So với kỳ trước" 
          />
          <MetricCard 
            title="Tỷ lệ hoàn thành" 
            value="78%" 
            change="5%" 
            isPositive={true}
            description="So với kỳ trước" 
          />
          <MetricCard 
            title="Mức độ tương tác" 
            value="65%" 
            change="8%" 
            isPositive={true}
            description="So với kỳ trước" 
          />
          <MetricCard 
            title="Tỷ lệ bỏ học" 
            value="12%" 
            change="3%" 
            isPositive={false}
            description="So với kỳ trước" 
          />
        </div>

        <DataVisualizer />
        
        <CourseTable />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Đánh giá chi tiết</h2>
            <div className="bg-card border rounded-lg p-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-insight-100 flex items-center justify-center text-insight-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Nội dung khóa học</h3>
                  <p className="text-sm text-muted-foreground">
                    Nội dung khóa học được đánh giá cao về tính cập nhật và phù hợp với nhu cầu thực tế của học viên, tăng 12% so với kỳ đánh giá trước.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-insight-100 flex items-center justify-center text-insight-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Phương pháp giảng dạy</h3>
                  <p className="text-sm text-muted-foreground">
                    Phương pháp giảng dạy được học viên đánh giá tích cực với 85% phản hồi cho rằng giảng viên truyền đạt rõ ràng và dễ hiểu.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-insight-100 flex items-center justify-center text-insight-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Cơ sở vật chất và trang thiết bị</h3>
                  <p className="text-sm text-muted-foreground">
                    Cần cải thiện về cơ sở vật chất, đặc biệt là phòng thực hành và thiết bị hỗ trợ giảng dạy, 65% học viên đề xuất nâng cấp.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <CourseEvaluationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
