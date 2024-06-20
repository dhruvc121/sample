import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

NextAuth({
    session:{
        strategy:'jwt'
    },
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                return ""
            }
        })
    ]
})