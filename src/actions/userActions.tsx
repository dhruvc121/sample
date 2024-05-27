"use server"
import {PrismaClient} from '@prisma/client'

export async function addUser(){
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

export async function getUser(username:string,password:string):Promise<any> {
    try{
        const prisma = new PrismaClient()
        const res = await prisma.user.findUnique({
            select:{
                username:true,
                id:true,
                role:true
            },
            where:{
                username,
                password
            }
        })
        console.log(res)
        return res
    }catch(err){
        console.log(err)
    }
}