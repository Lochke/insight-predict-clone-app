
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataModels = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Mô hình dữ liệu</h1>
              <p className="text-muted-foreground">
                Quản lý và phân tích các mô hình dữ liệu đánh giá khóa học
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Mô hình dự đoán tổng quan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mô hình dựa trên các yếu tố tổng quan để dự đoán chất lượng khóa học.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Độ chính xác:</span>
                    <span>92%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium">Cập nhật gần đây:</span>
                    <span>01/05/2024</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium">Số lượng dữ liệu:</span>
                    <span>25,000 mẫu</span>
                  </div>
                  <Button className="w-full mt-4 flex items-center justify-center" variant="outline">
                    Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Mô hình phân loại phản hồi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mô hình phân tích và phân loại phản hồi của sinh viên theo các nhóm.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Độ chính xác:</span>
                    <span>87%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium">Cập nhật gần đây:</span>
                    <span>15/04/2024</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium">Số lượng dữ liệu:</span>
                    <span>18,500 mẫu</span>
                  </div>
                  <Button className="w-full mt-4 flex items-center justify-center" variant="outline">
                    Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Mô hình dự đoán xu hướng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mô hình phân tích dữ liệu lịch sử để dự đoán xu hướng đánh giá trong tương lai.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Độ chính xác:</span>
                    <span>85%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium">Cập nhật gần đây:</span>
                    <span>28/04/2024</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium">Số lượng dữ liệu:</span>
                    <span>12,000 mẫu</span>
                  </div>
                  <Button className="w-full mt-4 flex items-center justify-center" variant="outline">
                    Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Chi tiết mô hình dữ liệu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-2">Biến đầu vào</h3>
                      <div className="space-y-2 border rounded-lg p-4">
                        <div className="flex justify-between items-center text-sm">
                          <span>Chất lượng giáo viên</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Số</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Nội dung khóa học</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Số</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Cơ sở vật chất</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Số</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Phương pháp đánh giá</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Số</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Loại khóa học</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Danh mục</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Biến đầu ra</h3>
                      <div className="space-y-2 border rounded-lg p-4">
                        <div className="flex justify-between items-center text-sm">
                          <span>Điểm đánh giá tổng thể</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Số</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Tỷ lệ hoàn thành dự kiến</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Phần trăm</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Phân loại chất lượng</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Danh mục</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Tài liệu mô hình</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 flex items-center gap-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium">Tài liệu kỹ thuật</p>
                          <p className="text-xs text-muted-foreground">Mô tả chi tiết kỹ thuật của mô hình</p>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center gap-3">
                        <Database className="h-8 w-8 text-green-500" />
                        <div>
                          <p className="font-medium">Dữ liệu huấn luyện</p>
                          <p className="text-xs text-muted-foreground">Thông tin về dữ liệu huấn luyện mô hình</p>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center gap-3">
                        <FileText className="h-8 w-8 text-purple-500" />
                        <div>
                          <p className="font-medium">Báo cáo đánh giá</p>
                          <p className="text-xs text-muted-foreground">Báo cáo đánh giá hiệu suất mô hình</p>
                        </div>
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

export default DataModels;
