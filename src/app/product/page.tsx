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
          productDesc:"",
          sizes:"",
          rate: 25.00,
          occasion: "casual",
          category: "clothing",
          color:"red"
        },
        {
          id: "2",
          image:"https://picsum.photos/50",
          productName: "Ligh Blue Shirt",
          productDesc:"",
          sizes:"",
          rate: 15.00,
          occasion: "formal",
          category: "clothing",
          color:"blue"
        },
        {
          id: "3",
          image:"https://picsum.photos/50",
          productName: "Light Pink Shirt",
          productDesc:"",
          sizes:"",
          rate: 35.00,
          occasion: "formal",
          category: "clothing",
          color:"pink"
        },
        {
          id: "4",
          image:"https://picsum.photos/50",
          productName: "Light Green Shirt",
          productDesc:"",
          sizes:"",
          rate: 45.00,
          occasion: "formal",
          category: "clothing",
          color:"green"
        },
        {
          id: "5",
          image:"https://picsum.photos/50",
          productName: "Black Trouser",
          productDesc:"",
          sizes:"",
          rate: 55.00,
          occasion: "formal",
          category: "clothing",
          color:"black"
        },
        {
          id: "6",
          image:"https://picsum.photos/50",
          productName: "Dark Gray Trouser",
          productDesc:"",
          sizes:"",
          rate: 20.00,
          occasion: "formal",
          category: "clothing",
          color:"gray"
        },
        {
          id: "7",
          image:"https://picsum.photos/50",
          productName: "Printed Blue Shirt",
          productDesc:"",
          sizes:"",
          rate: 30.00,
          occasion: "casual",
          category: "clothing",
          color:"blue"
        },
      ]
    return (
        <div className="w-full max-h-full overflow-auto flex flex-col">
          <Label className="text-lg">Product List</Label>
          <hr />
          <div className="flex flex-grow gap-1">
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