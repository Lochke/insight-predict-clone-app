
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Báo cáo đánh giá</h1>
                <p className="text-muted-foreground">
                  Danh sách các báo cáo phân tích và đánh giá khóa học
                </p>
              </div>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Tải xuống tất cả
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Báo cáo mới nhất</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-10 w-10 text-blue-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Báo cáo đánh giá khóa học học kỳ 1 (2024-2025)</p>
                          <p className="text-sm text-muted-foreground mt-1">Cập nhật: 01/05/2024 • 25 trang</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Tải xuống
                        </Button>
                        <Button size="sm" className="gap-1">
                          Xem <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-10 w-10 text-green-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Báo cáo phân tích xu hướng đánh giá (2023-2024)</p>
                          <p className="text-sm text-muted-foreground mt-1">Cập nhật: 28/04/2024 • 18 trang</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Tải xuống
                        </Button>
                        <Button size="sm" className="gap-1">
                          Xem <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-10 w-10 text-purple-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Báo cáo tổng hợp đánh giá giảng viên</p>
                          <p className="text-sm text-muted-foreground mt-1">Cập nhật: 15/04/2024 • 32 trang</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Tải xuống
                        </Button>
                        <Button size="sm" className="gap-1">
                          Xem <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Báo cáo theo chủ đề</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <p className="font-medium">Hiệu suất khóa học</p>
                      </div>
                      <p className="text-sm text-muted-foreground">12 báo cáo • Cập nhật gần đây: 01/05/2024</p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full flex items-center">
                        Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <p className="font-medium">Đánh giá giảng viên</p>
                      </div>
                      <p className="text-sm text-muted-foreground">8 báo cáo • Cập nhật gần đây: 28/04/2024</p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full flex items-center">
                        Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <p className="font-medium">Phương pháp đánh giá</p>
                      </div>
                      <p className="text-sm text-muted-foreground">5 báo cáo • Cập nhật gần đây: 15/04/2024</p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full flex items-center">
                        Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <p className="font-medium">Cơ sở vật chất</p>
                      </div>
                      <p className="text-sm text-muted-foreground">6 báo cáo • Cập nhật gần đây: 10/04/2024</p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full flex items-center">
                        Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <p className="font-medium">Đề xuất cải tiến</p>
                      </div>
                      <p className="text-sm text-muted-foreground">9 báo cáo • Cập nhật gần đây: 05/04/2024</p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full flex items-center">
                        Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <p className="font-medium">Phân tích so sánh</p>
                      </div>
                      <p className="text-sm text-muted-foreground">4 báo cáo • Cập nhật gần đây: 01/04/2024</p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full flex items-center">
                        Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
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

export default Reports;
