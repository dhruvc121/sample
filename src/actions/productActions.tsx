"use server"
import { Products } from '@/types'
import {PrismaClient} from '@prisma/client'

export async function addProduct(product:Products){
    const prisma= new PrismaClient()
    console.log(product,"server")
    try{
        const res = await prisma.product.create({
            data:{
                ...product
            }
        })
        console.log(res)
    }catch(err){
        console.log(err)
    }
}