"use client"
import { getUser } from "@/actions/userActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useFormik} from 'formik'


export default function Login() {
  const router=useRouter()
  const {values,resetForm,setValues,handleSubmit,handleChange}:any=useFormik({
    initialValues:{
      username:"",
      password:""
    },onSubmit:async(values:any,actions)=>{
      try{ 
        console.log(values)
        
        const res=await getUser(values.username,values.password)
        console.log(res)
        toast({
          variant:"default",
          title:`Welcome ${res.username}`,
          className:"bg-green-400 text-white text-lg",
          duration:1000
        })
        router.replace('/')
        resetForm()
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
      <Card className="w-[350px]">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your login credentails.</CardDescription>
        </CardHeader>
        <CardContent>
          
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" onChange={handleChange} value={values.username}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" onChange={handleChange} value={values.password}/>
              </div>
            </div>
          
        </CardContent>
        <CardFooter className="flec flex-col">
          <Button variant="outline" type="submit" /* onClick={handleLogin} */>Login</Button>
          <p className="flex text-sm mt-1">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-700">Sign Up</Link>
          </p>
        </CardFooter>
        </form>
      </Card>
    </div>
  )
}
