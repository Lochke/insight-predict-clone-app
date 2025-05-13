
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function CourseEvaluationForm() {
  const [courseId, setCourseId] = useState("");
  const [rating, setRating] = useState([4]);
  const [category, setCategory] = useState("content");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate evaluation submission process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Đánh giá đã được gửi thành công!", {
        description: "Cảm ơn bạn đã đánh giá khóa học.",
      });
      setCourseId("");
      setRating([4]);
      setCategory("content");
      setFeedback("");
    }, 1500);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Đánh giá khóa học</CardTitle>
        <CardDescription>
          Gửi đánh giá của bạn về khóa học
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="course-id">Mã khóa học</Label>
            <Input
              id="course-id"
              placeholder="Nhập mã khóa học"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Danh mục đánh giá</Label>
            <Select
              value={category}
              onValueChange={setCategory}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Chọn danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="content">Nội dung khóa học</SelectItem>
                <SelectItem value="instructor">Giảng viên</SelectItem>
                <SelectItem value="materials">Tài liệu học tập</SelectItem>
                <SelectItem value="facility">Cơ sở vật chất</SelectItem>
                <SelectItem value="support">Hỗ trợ học viên</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="rating">Đánh giá: {rating}/5</Label>
            </div>
            <Slider
              id="rating"
              min={1}
              max={5}
              step={0.5}
              value={rating}
              onValueChange={setRating}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="feedback">Góp ý chi tiết</Label>
            <Textarea 
              id="feedback"
              placeholder="Nhập góp ý của bạn về khóa học"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit} 
          disabled={isLoading || !courseId} 
          className="w-full bg-insight-600 hover:bg-insight-700"
        >
          {isLoading ? "Đang gửi đánh giá..." : "Gửi đánh giá"}
        </Button>
      </CardFooter>
    </Card>
  );
}
