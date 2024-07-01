import NextAuth, { CredentialsSignin } from "next-auth"
import credentials from 'next-auth/providers/credentials'
import { getUser } from "./actions/userActions"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      
      name:"credentials",
      credentials:{
        username:{label:"Username",type:"text"},
        password:{label:"Password",type:"password"}
      },
      authorize:async(credentials)=>{
        
        const username=credentials.username as string
        const password=credentials.password as string
        console.log(username,password,"============")
        if(!credentials.username || !credentials.password) throw new CredentialsSignin("No credentials provided")
        
        
        const res=await getUser(username,password)
        //console.log(res)
       
        
        return res
        
      }
    })
  ],
  pages:{
    signIn:"/login"
  },
  callbacks: {
    async jwt({user, token}) {
        if (user) {
            token.user = user;
        }
       // console.log(user,token,"user token")
        return token;
    },
    async session({session, token}: any) {
        session.user = token.user;
        return session;
    },

    signIn:async({account,user})=>{
      if(account?.provider=="credentials"){
        return true
      }else{
        return false
      }
    }
  },
})