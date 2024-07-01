"use client";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
 
  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="flex gap-1 w-full h-1/2">
        <div className="w-1/2 h-full border">
            <Label>Total Sales</Label>
        </div>
        <div className="w-1/2 h-full border">
            <Label>Sales Chart Monthly</Label>
        </div>
      </div>
      <div className="flex gap-1 w-full h-1/2">
        <div className="w-1/2 h-full border">
            <Label>Top Products</Label>
        </div>
        <div className="w-1/2 h-full border">
            <Label>Product sale pie chart</Label>
        </div>
      </div>
    </div>
  );
}
