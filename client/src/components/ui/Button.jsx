// Button.jsx
import clsx from "clsx"; 

const Button = ({ children, variant = "solid", bg = "black", className = "", ...props }) => {
  const baseClasses =
    " text-sm md:text-base px-6 py-3 my-4 self-center md:self-start rounded-full hover:scale-110 duration-300";

  const variantClasses = clsx({
    "bg-black ": variant === "solid" && bg === "black",
    [`bg-${bg} text-white`]: variant === "solid" && bg !== "black",
    "bg-transparent text-black hover:bg-black hover:text-white": variant === "outline",
  });

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
