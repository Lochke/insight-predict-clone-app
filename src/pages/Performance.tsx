
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

const Performance = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Hiệu suất khóa học</h1>
              <p className="text-muted-foreground">
                Phân tích chi tiết về hiệu suất của các khóa học theo nhiều tiêu chí
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tỷ lệ hoàn thành
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.5%</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    <span>3.2% so với kỳ học trước</span>
                  </p>
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Khoa CNTT</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Khoa Kinh tế</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Khoa Ngoại ngữ</span>
                        <span>76%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "76%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Điểm trung bình
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.6/10</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    <span>0.4 điểm so với kỳ trước</span>
                  </p>
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Nội dung</span>
                        <span>8.2/10</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "82%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Giảng viên</span>
                        <span>7.9/10</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "79%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Cơ sở vật chất</span>
                        <span>6.8/10</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tỷ lệ tương tác
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65.8%</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                    <span>2.3% so với kỳ trước</span>
                  </p>
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Thảo luận</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Bài tập</span>
                        <span>84%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Đặt câu hỏi</span>
                        <span>53%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "53%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hiệu suất theo khoa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border rounded-md bg-muted/20">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Biểu đồ hiệu suất theo khoa</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Xu hướng hiệu suất</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border rounded-md bg-muted/20">
                    <TrendingUp className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-2 text-sm text-muted-foreground">Xu hướng hiệu suất qua các kỳ</span>
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

export default Performance;
