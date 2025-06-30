export default function Card({
    children,
    variant = "default",
    className = "",
    ...props
}) {
    const baseClasses = "rounded-lg border transition-all duration-300"

    const variants = {
        default: "bg-dark-800 border-dark-700 hover:border-primary-500",
        elevated:
            "bg-dark-800 border-dark-700 hover:border-primary-500 shadow-lg hover:shadow-xl",
        outline: "bg-transparent border-dark-600 hover:border-primary-500",
        primary:
            "bg-primary-600/10 border-primary-500/20 hover:border-primary-500",
    }

    const classes = `${baseClasses} ${variants[variant]} ${className}`

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}
