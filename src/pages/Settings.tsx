
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  role: z.string().min(1, {
    message: "Vui lòng chọn vai trò.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  name: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
  role: "admin",
};

const Settings = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "Cập nhật thành công",
      description: "Thông tin tài khoản đã được cập nhật",
    });
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto animate-fade-in">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Cài đặt</h1>
              <p className="text-muted-foreground">
                Quản lý tài khoản và thiết lập hệ thống
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <div className="font-medium">Cài đặt</div>
                <nav className="flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start">
                    Tài khoản
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Bảo mật
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Thông báo
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Hiển thị
                  </Button>
                </nav>
              </div>

              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin tài khoản</CardTitle>
                    <CardDescription>
                      Cập nhật thông tin cá nhân và tài khoản của bạn
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Họ và tên</FormLabel>
                              <FormControl>
                                <input
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <input
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="role"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vai trò</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                >
                                  <option value="admin">Quản trị viên</option>
                                  <option value="teacher">Giảng viên</option>
                                  <option value="student">Sinh viên</option>
                                </select>
                              </FormControl>
                              <FormDescription>
                                Vai trò xác định quyền của bạn trong hệ thống
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit">Cập nhật tài khoản</Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cài đặt hiển thị</CardTitle>
                    <CardDescription>
                      Tùy chỉnh giao diện và hiển thị của hệ thống
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Chế độ tối</p>
                          <p className="text-sm text-muted-foreground">
                            Bật chế độ tối cho giao diện
                          </p>
                        </div>
                        <div className="flex h-6 w-11 items-center rounded-full border bg-muted p-1">
                          <div className="h-4 w-4 rounded-full bg-background"></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Thông báo trên trình duyệt</p>
                          <p className="text-sm text-muted-foreground">
                            Nhận thông báo từ hệ thống
                          </p>
                        </div>
                        <div className="flex h-6 w-11 items-center rounded-full border bg-primary p-1 justify-end">
                          <div className="h-4 w-4 rounded-full bg-white"></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Hiển thị dữ liệu chi tiết</p>
                          <p className="text-sm text-muted-foreground">
                            Hiển thị thông tin chi tiết trên các biểu đồ
                          </p>
                        </div>
                        <div className="flex h-6 w-11 items-center rounded-full border bg-primary p-1 justify-end">
                          <div className="h-4 w-4 rounded-full bg-white"></div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button variant="outline">Đặt lại mặc định</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
