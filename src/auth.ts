import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsPovider from 'next-auth/providers/credentials'
import { getUser } from './actions/userActions';


export const {
    handlers:{GET,POST},
    signIn,
    signOut,
    auth
}=NextAuth({
    session:{
        strategy:"jwt"
    },
    providers:[
        CredentialsPovider({
            async authorize(credentials){
                if (!credentials || typeof credentials.email !== "string" || typeof credentials.password !== "string") {
                    return null;
                }
                try {
                    const user = await getUser(credentials.email, credentials.password);
                    return user ? user : null;  // Ensure returning User or null
                } catch (error) {
                    console.error("Error during authorization:", error);
                    return null;
                }
            }
        })
    ]
})


