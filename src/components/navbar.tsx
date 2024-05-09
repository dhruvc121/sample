"use client"
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Label } from "./ui/label";
import {
    NavigationMenu,
    NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { Button } from "./ui/button";

  


const Navbar = () => {
    return (
        /*{ <nav className="flex justify-between items-center">
            <div className="logo">
                <Link href={'/'} className="logo flex p-4 items-center cursor-pointer">
                    <HomeIcon />
                    <Label className="text-lg">PMS</Label>
                </Link>
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li className={navigationMenuTriggerStyle()}>
                        <Link href={'/'}>
                            <Label className="text-lg">Dashboard</Label>
                        </Link>
                    </li>
                    <li className={navigationMenuTriggerStyle()}>
                        <Link href={'/product'}>
                            <Label className="text-lg">Products</Label>
                        </Link>
                    </li>
                    <li className={navigationMenuTriggerStyle()}>
                        <Link href={'/product/add'}>
                            <Label className="text-lg">Add Products</Label>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="log-options">

            </div>
        </nav> }*/
        <nav className="flex justify-between items-center">
            <div className="logo">
                    <Link href={'/'} className="logo flex p-4 items-center cursor-pointer">
                        <HomeIcon />
                        <Label className="text-lg">PMS</Label>
                    </Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                            <Link href={'/'} className="logo flex p-4 items-center cursor-pointer">
                                <Label className="text-lg">Dashboard</Label>
                            </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                            <Link href={'/product'} className="logo flex p-4 items-center cursor-pointer">
                                <Label className="text-lg">Products</Label>
                            </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                            <Link href={'/product/add'} className="logo flex p-4 items-center cursor-pointer">
                                <Label className="text-lg">Add Products</Label>
                            </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div>
                <Button variant={"outline"} className="">Login</Button>
            </div>
        </nav>
    );
}

export default Navbar;