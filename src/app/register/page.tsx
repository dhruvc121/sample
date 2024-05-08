"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

const Register = () => {
    return (
        <div className="w-100 h-full flex justify-center items-center">
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
                <Button variant="outline">Register</Button>
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