import clsx from "clsx";

export function BaseButton({ type = "button", className, children, ...props }) {
  return (
    <button
      className={clsx("px-3 py-2 rounded bg-secondary text-sm text-primary font-medium shadow-xs hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", className)}
      {...props}
    >
      {children}
    </button>
  )
}
