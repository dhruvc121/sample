"use client"

import { addUser } from "@/actions/userActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { registerSchema } from "@/schema/register";
import { Label } from "@radix-ui/react-label";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
    const router=useRouter()
    const {values,handleChange,handleSubmit,handleReset,handleBlur,errors,touched}=useFormik({
        initialValues:{
            username:"",
            password:"",
            cpassword:""
        },
        validationSchema:registerSchema,
        onSubmit:async(values,actions)=>{
            try{
                console.log(values)
                if(values.password===values.cpassword){
                    await addUser(values.username,values.password)
                    toast({
                    variant:"default",
                    title: "Success",
                    description: "User registered successfully",
                    className:"border-green-600 text-green-600",
                    duration:1000
                    })
                    router.replace('/login')
                }else{
                    throw Error("Passwords do not match")
                }
            }catch(err){
                console.log(err)
                toast({
                variant:"default",
                title: "Failure",
                description: "Could not register user",
                className:"border-green-600 text-green-600",
                duration:1000
                })
            }
        }
    })
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create your account by filling the details</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
                    </div>
                    {   
                        errors.username && touched.username && (
                        <p className="text-sm text-red-500 mx-0 capitalize">{errors.username}</p>
                    )}
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} type="password" value={values.password}/>
                    </div>
                    {   
                        errors.password && touched.password && (
                        <p className="text-sm text-red-500 mx-0 capitalize">{errors.password}</p>
                    )}
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" placeholder="Confirm Password" onChange={handleChange} onBlur={handleBlur} type="password" value={values.cpassword} />
                    </div>
                    </div>
                </form>
                </CardContent>
                <CardFooter className="flec flex-col">
                <Button variant="outline" type="submit">Register</Button>
                <p className="flex text-sm mt-1">
                    Already have an account?
                <Link href="/login" className="text-blue-700">Sign In</Link>
                </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Register;