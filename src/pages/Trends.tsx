
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

const Trends = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Xu hướng đánh giá</h1>
              <p className="text-muted-foreground">
                Phân tích xu hướng đánh giá khóa học qua các kỳ học
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Xu hướng điểm trung bình
                  </CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Tăng</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    <span>12% trong 3 kỳ học gần đây</span>
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ xu hướng</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Mức độ hài lòng
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Ổn định</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    <span>2% trong 3 kỳ học gần đây</span>
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <TrendingUp className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ xu hướng</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Phản hồi tiêu cực
                  </CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Giảm</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowDown className="h-4 w-4 text-green-500 mr-1" />
                    <span>8% trong 3 kỳ học gần đây</span>
                  </p>
                  <div className="h-40 mt-4 flex items-center justify-center border rounded-md bg-muted/20">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ xu hướng</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Xu hướng đánh giá theo thời gian</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-80 flex items-center justify-center border rounded-md bg-muted/20">
                  <LineChart className="h-16 w-16 text-muted-foreground/50" />
                  <span className="ml-2 text-sm text-muted-foreground">Biểu đồ xu hướng đánh giá chi tiết</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Các yếu tố cải thiện</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Chất lượng giảng dạy</span>
                        <span className="text-xs font-medium text-green-500">+18%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Tài liệu học tập</span>
                        <span className="text-xs font-medium text-green-500">+12%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "62%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Hỗ trợ học viên</span>
                        <span className="text-xs font-medium text-green-500">+9%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "59%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Các vấn đề cần cải thiện</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Cơ sở vật chất</span>
                        <span className="text-xs font-medium text-red-500">-8%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Thiết bị thực hành</span>
                        <span className="text-xs font-medium text-red-500">-5%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Phương pháp đánh giá</span>
                        <span className="text-xs font-medium text-red-500">-2%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Dự đoán xu hướng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Kỳ tiếp theo</span>
                        <span className="text-xs font-medium text-green-500">+5%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">6 tháng tới</span>
                        <span className="text-xs font-medium text-green-500">+8%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Năm tới</span>
                        <span className="text-xs font-medium text-green-500">+12%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trends;
