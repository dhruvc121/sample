import { getUser } from "@/actions/userActions";
import { FormEvent } from "react";

const LoginForm = () => {

    async function handleSubmit(event:FormEvent){
        event.preventDefault()
        try {
            const form = event.currentTarget as HTMLFormElement;
            if (form == null) return;
            const formData = new FormData(form);
            console.log(formData.get("username"),formData.get("password")); // Log form data entries


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-container m-2 flex gap-2">
                <label htmlFor="username">Username</label>
                <input id="username" name="username" className="outline"></input>
                </div>
                <div className="input-container m-2 flex gap-2">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" className="outline"></input>
                </div>
                <button type="submit" className="p-2 oultine">Submit</button>
            </form>
        </>
    );
}

export default LoginForm;