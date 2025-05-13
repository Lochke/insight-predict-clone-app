
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, TrendingUp, BarChart3, PieChart } from "lucide-react";

const Insights = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Phân tích chuyên sâu</h1>
              <p className="text-muted-foreground">
                Phân tích chi tiết về hiệu suất và chất lượng khóa học
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Xu hướng điểm đánh giá
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Tăng 15%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    So với kỳ trước
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dữ liệu</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Phân tích theo khoa
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23 khoa</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Đã tham gia đánh giá
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dữ liệu</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Đánh giá theo chủ đề
                  </CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8 chủ đề</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Đã được phân tích
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <PieChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dữ liệu</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Phân tích chi tiết các yếu tố ảnh hưởng</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Môi trường học tập</h3>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-2 bg-insight-500 rounded-full" style={{ width: '75%' }} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Khá tốt</span>
                      <span>75%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Nội dung giảng dạy</h3>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-2 bg-insight-500 rounded-full" style={{ width: '82%' }} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Rất tốt</span>
                      <span>82%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Phương pháp đánh giá</h3>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-2 bg-insight-500 rounded-full" style={{ width: '68%' }} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Khá tốt</span>
                      <span>68%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Hỗ trợ sinh viên</h3>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-2 bg-insight-500 rounded-full" style={{ width: '60%' }} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Trung bình</span>
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Đề xuất cải thiện</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-insight-100 flex items-center justify-center text-insight-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium">Tăng cường tương tác trong lớp học</h3>
                    <p className="text-sm text-muted-foreground">Tạo thêm các hoạt động nhóm và thảo luận để sinh viên tham gia tích cực hơn.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-insight-100 flex items-center justify-center text-insight-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium">Cập nhật tài liệu học tập</h3>
                    <p className="text-sm text-muted-foreground">Bổ sung các nghiên cứu và ví dụ thực tiễn mới nhất vào nội dung giảng dạy.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-insight-100 flex items-center justify-center text-insight-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium">Cải thiện hệ thống đánh giá</h3>
                    <p className="text-sm text-muted-foreground">Áp dụng đa dạng hình thức đánh giá, không chỉ dựa vào bài kiểm tra cuối kỳ.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insights;
