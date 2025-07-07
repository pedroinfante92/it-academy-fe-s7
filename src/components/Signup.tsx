import { Link } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    return (
        <>
            <form className="max-w-md m-auto pt-24">
                <h2 className="font-bold pb-2">Sign up today!</h2>
                <p>Already have an account? <Link to="/signin">Sign in!</Link></p>
                <div className="flex flex-col py-4">
                    <input className="p-3 mt-6 border-2 border-blue-500" type="email" placeholder="Email" />
                    <input className="p-3 mt-6 border-2 border-blue-500" type="password" placeholder="Password" />
                    <button className="mt-6 w-full" type="submit" disable={loading}>Signup</button>
                </div>
            </form>
        </>
    )
}

export default Signup
