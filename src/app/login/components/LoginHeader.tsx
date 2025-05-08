import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginHeader() {
  return (
    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
      <ArrowLeft size={20} />
      <span>Rankademy</span>
    </Link>
  )
}
