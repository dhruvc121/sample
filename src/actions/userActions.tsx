"use server"
import {PrismaClient} from '@prisma/client'
import { cookies } from 'next/headers'
import {signIn} from '@/auth'
import { CredentialsSignin } from 'next-auth'
import { redirect } from 'next/navigation'


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
        //cookies().set('user',JSON.stringify(res))
        return res
    }catch(err){
        console.log(err)
    }
}


export async function googlelogin(formdata:any) {
    console.log(formdata)
}

export const login=async(fomrData:FormData)=>{
    const username=fomrData.get('username')
    const password=fomrData.get('password')
    console.log(username,password,"cred")
    try {
        await signIn('credentials',{
            redirect:false,
            callbackUrl:'/',
            username,
            password
        })
    } catch (error) {
        console.log(error)
        throw new CredentialsSignin("Something went wrong")
    }
    redirect('/')
}