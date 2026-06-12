import "./Button.css";

type Variant = "primary" | "secondary" | "danger";
type Size = "small" | "medium" | "large";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`btn ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
