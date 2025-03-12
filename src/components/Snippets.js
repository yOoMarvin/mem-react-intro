function ButtonSnippet({ variant = "filled", size = "medium", disabled, onClick, children }) {
  const VARIANTS = {
    filled: "bg-blue-500 hover:bg-blue-700 text-white",
    ghost: "bg-blue-50 text-blue-500 hover:bg-blue-200 hover:text-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  };

  const SIZES = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const baseClasses =
    "rounded-2xl font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-4 hover:cursor-pointer disabled:cursor-not-allowed flex flex-row space-x-2 items-center justify-center";
  const variantClasses = VARIANTS[variant];
  const sizeClasses = SIZES[size];
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSnippet;
