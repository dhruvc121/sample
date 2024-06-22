const LoginForm = () => {
    return (
        <>
            <form>
                <button name="action" type="submit" value="google"
                className="text-black bg-white py-2 px-4 outline">
                    google
                </button>
                <button name="action" type="submit" value="gitub"
                className="text-black bg-white py-2 px-4 outline">
                    github
                </button>
            </form>
        </>
    );
}

export default LoginForm;