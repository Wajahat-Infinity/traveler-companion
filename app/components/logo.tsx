import Link from "next/link"
import { Globe } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex items-center justify-center">
        <Globe className={`${sizeClasses[size]} text-primary`} />
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-[8px]">PK</span>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} text-primary leading-tight`}>Traveler</span>
          <span className="text-xs text-muted-foreground leading-tight">Companion Platform</span>
        </div>
      )}
    </Link>
  )
}
