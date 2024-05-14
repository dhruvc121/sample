"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { Label } from "@radix-ui/react-label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
  
  export default function PaginationBlock() {
    const  pageNo=1
    const  totalPage=1
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
          <Select>
            <SelectTrigger>
                <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
            <PaginationItem>
                <Label>Page {pageNo} of {totalPage}</Label>
            </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  