"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router=useRouter()
  const handleSubmit=()=>{
    router.push('/product/add')
        toast({
          variant:"default",
          title: "Success",
          description: "Product added successfully",
          className:"border-green-600 text-green-600",
          duration:1000
        })
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
          <CardDescription>Add new products to your lineup.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Product Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="productDesc">Product Description</Label>
                <Textarea id="productDesc" placeholder="Product Description"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rate">Rate</Label>
                <Input type="number" id="rate" placeholder="Rate" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="color">Color</Label>
                <Input id="color" placeholder="Color" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Category" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="occasion">Occasion</Label>
                <Input id="occasion" placeholder="Occasion" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" placeholder="Image" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flec flex-col">
          <Button variant="outline" onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
