import * as React from "react"

import { cn } from "@/lib/utils"

export const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("relative", className)} ref={ref} {...props} />
  },
)
ChartContainer.displayName = "ChartContainer"

export const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("h-full w-full", className)} ref={ref} {...props} />
  },
)
Chart.displayName = "Chart"

export const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("bg-popover text-popover-foreground p-4 rounded-md shadow-md", className)}
        ref={ref}
        {...props}
      />
    )
  },
)
ChartTooltip.displayName = "ChartTooltip"

export const ChartTooltipContent = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <p className={cn("text-sm", className)} ref={ref} {...props} />
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("flex items-center space-x-2", className)} ref={ref} {...props} />
  },
)
ChartLegend.displayName = "ChartLegend"

export const ChartLegendItem = React.forwardRef<
  HTMLDivElement,
  { name: string; color: string } & React.HTMLAttributes<HTMLDivElement>
>(({ className, name, color, ...props }, ref) => {
  return (
    <div className={cn("flex items-center space-x-1 text-sm", className)} ref={ref} {...props}>
      <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{name}</span>
    </div>
  )
})
ChartLegendItem.displayName = "ChartLegendItem"
