import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

const Product = () => {
    const invoices = [
        {
          id: "1",
          image:"https://picsum.photos/50",
          productName: "Red Printed Shirt",
          rate: "$25.00",
          category: "casual",
        },
        {
          id: "2",
          image:"https://picsum.photos/50",
          productName: "Ligh Blue Shirt",
          rate: "$15.00",
          category: "formal",
        },
        {
          id: "3",
          image:"https://picsum.photos/50",
          productName: "Light Pink Shirt",
          rate: "$35.00",
          category: "formal",
        },
        {
          id: "4",
          image:"https://picsum.photos/50",
          productName: "Light Green Shirt",
          rate: "$45.00",
          category: "formal",
        },
        {
          id: "5",
          image:"https://picsum.photos/50",
          productName: "Black Trouser",
          rate: "$55.00",
          category: "formal",
        },
        {
          id: "6",
          image:"https://picsum.photos/50",
          productName: "Dark Gray Trouser",
          rate: "$20.00",
          category: "formal",
        },
        {
          id: "7",
          image:"https://picsum.photos/50",
          productName: "Printed Blue Shirt",
          rate: "$30.00",
          category: "casual",
        },
      ]
    return (
        <div className="flex flex-col">
        <Label className="text-lg">Product List</Label>
        <hr />
        <Table>
            <TableCaption>A list of all products.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead >Image</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead className="text-right">Category</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell className="font-medium">
                        <Image width={50} height={50} src={invoice.image} alt={invoice.productName}></Image>
                    </TableCell>
                    <TableCell>{invoice.productName}</TableCell>
                    <TableCell>{invoice.rate}</TableCell>
                    <TableCell className="text-right">{invoice.category}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    );
}

export default Product;