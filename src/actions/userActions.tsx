"use server"
import {PrismaClient} from '@prisma/client'
import { cookies } from 'next/headers'


export async function addUser(username:string,password:string){
    const prisma= new PrismaClient()
    try{
        const res = await prisma.user.create({
            data:{
                username,
                password,
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
        cookies().set('user',JSON.stringify(res))
        return res
    }catch(err){
        console.log(err)
    }
}


export async function googlelogin(formdata:any) {
    console.log(formdata)
}