"use client"
import { addProduct } from "@/actions/productActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router=useRouter()
  const {values,resetForm,setValues,handleSubmit,handleChange,handleBlur}:any=useFormik({
    initialValues:{
      productName:"",
      productDesc:"",
      rate:0.00,
      color:"",
      category:"",
      occasion:"",
      image:"",
      sizes:""
    },onSubmit:async(values:any,actions)=>{
      try{ 
        console.log(values)
        await addProduct(values)
        toast({
          variant:"default",
          title: "Success",
          description: "Product added successfully",
          className:"border-green-600 text-green-600",
          duration:1000
        })
        //resetForm()
      }catch(err){
        toast({
          title:"Inavlid Credentials",
          variant:"destructive"
        })
        throw err
      }
    }
  })
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-1/3">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
          <CardDescription>Add new products to your lineup.</CardDescription>
        </CardHeader>
        <CardContent>
          
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Product Name" onChange={handleChange} onBlur={handleBlur} value={values.productname}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="productDesc">Product Description</Label>
                <Textarea id="productDesc" placeholder="Product Description"onChange={handleChange} onBlur={handleBlur} value={values.productdesc}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rate">Rate</Label>
                <Input type="number" id="rate" placeholder="Rate" onChange={handleChange} onBlur={handleBlur} value={values.rate}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="color">Color</Label>
                <Input id="color" placeholder="Color" onChange={handleChange} onBlur={handleBlur} value={values.color}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Category" onChange={handleChange} onBlur={handleBlur} value={values.category}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="sizes">Sizes</Label>
                <Input id="sizes" placeholder="sizes" onChange={handleChange} onBlur={handleBlur} value={values.sizes}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="occasion">Occasion</Label>
                <Input id="occasion" placeholder="Occasion" onChange={handleChange} onBlur={handleBlur} value={values.occasion}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" placeholder="Image" onChange={handleChange} onBlur={handleBlur} value={values.image}/>
              </div>
            </div>
          
        </CardContent>
        <CardFooter className="flec flex-col">
          <Button variant="outline" type="submit">Submit</Button>
        </CardFooter>
        </form>
      </Card>
    </div>
  )
}
