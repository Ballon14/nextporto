export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"

    const variants = {
        primary:
            "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
        secondary:
            "bg-dark-700 hover:bg-dark-600 text-white focus:ring-dark-500",
        outline:
            "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500",
        ghost: "text-dark-300 hover:text-white hover:bg-dark-700 focus:ring-dark-500",
    }

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg",
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}
