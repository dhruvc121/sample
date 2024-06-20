"use client"
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle, 
  } from "./ui/navigation-menu"
import { HomeIcon, User2Icon } from "lucide-react";
import { Label } from "./ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover"
import { Button } from "./ui/button";
// import { cookies } from "next/headers";
// import { useEffect } from "react";

  


const Navbar = () => {
    
    // useEffect(()=>{
    //     'use server'
    //     const user=cookies().get('user')?.value
    //     console.log(user)
    // },[])

    const username="user"

    return (
        <NavigationMenu className="w-full flex justify-between items-center max-w-none">
            <div className="logo">
                <Link href={'/'} className="logo flex p-4 items-center cursor-pointer">
                    <HomeIcon />
                    <Label className="text-lg cursor-pointer">PMS</Label>
                </Link>
            </div>
            <NavigationMenuList className="flex">
                <NavigationMenuItem>
                    <Link href={'/'} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Label>Dashboard</Label>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/product'} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Label>Products</Label>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/product/add'} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Label>Add Products</Label>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <div className="options">
                <Popover>
                    <PopoverTrigger asChild>
                        <Label className="flex justify-center items-center cursor-pointer">
                            {username}
                            <User2Icon className="m-2"/>
                        </Label>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto px-1 py-2">
                        {/* <Label className="w-full h-full cursor-pointer hover:bg-slate-100">Logout</Label> */}
                        {/* <div className="cursor-pointer hover:bg-slate-100 px-4">Logout</div> */}
                        <Button variant={"ghost"} className="border-0">Logout</Button>
                    </PopoverContent>
                </Popover>
            </div>
       </NavigationMenu> 
    );
}

export default Navbar;