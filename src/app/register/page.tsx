"use client"

import { addUser } from "@/actions/userActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

const Register = () => {
    const handleSubmit=async()=>{
        try{
            //await addUser()
            toast({
            variant:"default",
            title: "Success",
            description: "User registered successfully",
            className:"border-green-600 text-green-600",
            duration:1000
            })
        }catch(err){
            toast({
            variant:"default",
            title: "Failure",
            description: "Could not register user",
            className:"border-green-600 text-green-600",
            duration:1000
            })
        }

    }
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create your account by filling the details</CardDescription>
                </CardHeader>
                <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Username" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" placeholder="Confirm Password" />
                    </div>
                    </div>
                </form>
                </CardContent>
                <CardFooter className="flec flex-col">
                <Button variant="outline" onClick={handleSubmit}>Register</Button>
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