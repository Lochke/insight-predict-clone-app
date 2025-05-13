
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText, Star } from "lucide-react";

const courses = [
  {
    id: "CS101",
    name: "Lập trình cơ bản",
    instructor: "Nguyễn Văn A",
    department: "Công nghệ thông tin",
    rating: 4.5,
    completionRate: "92%",
  },
  {
    id: "CS201",
    name: "Cấu trúc dữ liệu và giải thuật",
    instructor: "Trần Thị B",
    department: "Công nghệ thông tin",
    rating: 4.2,
    completionRate: "85%",
  },
  {
    id: "CS301",
    name: "Cơ sở dữ liệu",
    instructor: "Lê Văn C",
    department: "Công nghệ thông tin",
    rating: 4.0,
    completionRate: "78%",
  },
  {
    id: "MATH101",
    name: "Đại số tuyến tính",
    instructor: "Phạm Thị D",
    department: "Toán học",
    rating: 3.8,
    completionRate: "75%",
  },
  {
    id: "ENG101",
    name: "Tiếng Anh chuyên ngành",
    instructor: "John Smith",
    department: "Ngoại ngữ",
    rating: 4.3,
    completionRate: "88%",
  },
];

export function CourseTable() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl">Danh sách khóa học</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã khóa học</TableHead>
                <TableHead>Tên khóa học</TableHead>
                <TableHead>Giảng viên</TableHead>
                <TableHead>Khoa/Bộ môn</TableHead>
                <TableHead className="text-center">Đánh giá</TableHead>
                <TableHead className="text-center">Tỷ lệ hoàn thành</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.id}</TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>{course.department}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      {course.rating}
                      <Star className="h-4 w-4 ml-1 text-yellow-500 fill-yellow-500" />
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{course.completionRate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Chi tiết
                      </Button>
                      <Button size="sm" variant="outline" className="bg-insight-50 text-insight-600 border-insight-200 hover:bg-insight-100">
                        <Star className="h-4 w-4 mr-1" />
                        Đánh giá
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
