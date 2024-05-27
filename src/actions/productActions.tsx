"use server"
import {PrismaClient} from '@prisma/client'

export async function addProduct(){
    const prisma= new PrismaClient()
    try{
        const res = await prisma.user.create({
            data:{
                username:"admin",
                password:"admin",
                role:"ADMIN"
            }
        })
        console.log(res)
    }catch(err){
        console.log(err)
    }
}