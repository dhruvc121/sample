import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";

const Filters = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="sorting-section flex justify-between items-center my-1">
            <Label className="text-lg p-2">Sort:</Label>
            <Select>
                <SelectTrigger className="">
                    <SelectValue placeholder="featured" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Sort by</SelectLabel>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="productname-asc">Name: A-Z</SelectItem>
                    <SelectItem value="productname-desc">Name: Z-A</SelectItem>
                    <SelectItem value="id-desc">Latest</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            </div>
            <Separator className="my-1"/>
            <div className="filter-section">
                <div className="filter-heading p-2">
                    <Label className="text-lg">Filters:</Label>
                </div>
                <div className=" flex flex-col price-filter p-2">
                    <div className="flex items-center gap-2">
                        <Label className="text-lg ">Price</Label>
                        <Slider defaultValue={[30]} max={100} step={1} />
                    </div>
                    <Label className=" text-slate-400">${0} to ${30}</Label>
                </div>
                <div className="color-filter p-2">
                    <Label className="text-lg">Color</Label>
                    <div className="checkbox-container flex flex-col justify-center">
                    {
                        ['Red','Blue','Green','Black','Gray','Pink'].map((color)=>{
                            return <div className="flex justify-start m-1">
                                <Checkbox id={color} name="color" value={color}/>
                                <Label htmlFor={color} className="mx-1">{color}</Label>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className="color-filter p-2">
                    <Label className="text-lg">Category</Label>
                    <div className="checkbox-container flex flex-col justify-center">
                    {
                        ['Clothing'].map((category)=>{
                            return <div className="flex justify-start m-1">
                                <Checkbox id={category} name="category" value={category}/>
                                <Label htmlFor={category} className="mx-1">{category}</Label>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className="color-filter p-2">
                    <Label className="text-lg">Occasion</Label>
                    <div className="checkbox-container flex flex-col justify-center">
                    {
                        ['Formal','Casual'].map((occasion)=>{
                            return <div className="flex justify-start m-1">
                                <Checkbox id={occasion} name="occasion" value={occasion}/>
                                <Label htmlFor={occasion} className="mx-1">{occasion}</Label>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;