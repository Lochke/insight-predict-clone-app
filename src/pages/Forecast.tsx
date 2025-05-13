
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, LineChart, ArrowUp, ArrowDown } from "lucide-react";
import { PredictionForm } from "@/components/PredictionForm";

const Forecast = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dự báo khóa học</h1>
              <p className="text-muted-foreground">
                Phân tích và dự báo xu hướng chất lượng khóa học dựa trên dữ liệu lịch sử
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Dự báo điểm đánh giá
                  </CardTitle>
                  <AreaChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.5/5</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    <span>0.3 so với kỳ hiện tại</span>
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dự báo</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Dự báo tỷ lệ hoàn thành
                  </CardTitle>
                  <AreaChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    <span>7% so với kỳ hiện tại</span>
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dự báo</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Dự báo tỷ lệ bỏ học
                  </CardTitle>
                  <AreaChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8%</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowDown className="h-4 w-4 text-green-500 mr-1" />
                    <span>4% so với kỳ hiện tại</span>
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dự báo</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Dự báo chi tiết</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border rounded-md bg-muted/20">
                    <AreaChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ dự báo chi tiết</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Mô hình dự báo</CardTitle>
                </CardHeader>
                <CardContent>
                  <PredictionForm />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Các yếu tố ảnh hưởng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Yếu tố tích cực</h3>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Nâng cao chất lượng giảng viên</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cập nhật nội dung giảng dạy</span>
                        <span>24%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "24%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Phương pháp giảng dạy hiện đại</span>
                        <span>18%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Yếu tố tiêu cực</h3>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cơ sở vật chất xuống cấp</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Thiết bị thực hành thiếu</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Khối lượng bài tập nhiều</span>
                        <span>8%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forecast;
