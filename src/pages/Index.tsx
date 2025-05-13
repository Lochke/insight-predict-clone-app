
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden md:flex" />
      <main className="flex flex-col flex-1 overflow-hidden">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
