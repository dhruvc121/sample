import Filters from "@/components/filter";
import ProductTable from "@/components/producttable";

import { Label } from "@/components/ui/label";
import { Products } from "@/types";


const Product = () => {
    const products:Products[]= [
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
        <div className="w-full h-full flex flex-col">
          <Label className="text-lg">Product List</Label>
          <hr />
          <div className="flex gap-1">
            <div className="filter-section w-1/6">
              <Filters/>
            </div>
            <div className="table-section w-5/6">
              <ProductTable products={products}/>
            </div>
          </div>
        </div>
    );
}

export default Product;