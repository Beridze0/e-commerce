import { LogIn } from "lucide-react"

const Login = () => {
  return (
    <div className="flex items-center w-fit py-1 px-3 border border-border rounded-md cursor-pointer hover:bg-hoverSecondary gap-2">
        <LogIn className="size-5" />
        <p className="text-sm">Enter</p>
    </div>
  )
}

export default Login