import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className="grid place-items-center mt-32">
        <img className="h-44 w-66" 
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        alt="" /> 
        <h1 onClick={signIn}
         className="p-5 bg-blue-500 cursor-pointer text-center text-white
        rounded-full font-bold">
            LogIn with Facebook
        </h1>
        </div>
  )
}

export default Login