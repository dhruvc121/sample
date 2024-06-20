import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Products } from "@/types";
import PaginationBlock from "./pagination";
import { ScrollArea } from "./ui/scroll-area";
const ProductTable = ({products}:{products:Products[]}) => {
    
    return (
        <div className=" max-h-full w-full overflow-auto border">
            
            <Table className="">
            <TableCaption>A list of all products.</TableCaption>
            <TableHeader className="min-w-full">
                <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead >Image</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead className="text-right">Color</TableHead>
                <TableHead className="text-right">Category</TableHead>
                <TableHead className="text-right">Occasion</TableHead>
                <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <div className="max-h-full w-full overflow-auto"></div>
            <TableBody className="">
                {products.map((product:Products) => (
                <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell className="font-medium">
                        <Image width={50} height={50} src={product.image} alt={product.productName}></Image>
                    </TableCell>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>{product.rate}</TableCell>
                    <TableCell className="text-right">{product.color}</TableCell>
                    <TableCell className="text-right">{product.category}</TableCell>
                    <TableCell className="text-right">{product.occasion}</TableCell>
                    <TableCell>
                        <div className="flex float-end">
                            <Button variant={"outline"} size={"sm"}>
                                <PencilIcon />
                            </Button>
                            <Button variant={"outline"} size={"sm"}>
                                <TrashIcon />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={8} className="text-center">
                    <PaginationBlock/>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>    
        </div>
    );
}

export default ProductTable;