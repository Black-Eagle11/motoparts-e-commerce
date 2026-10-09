function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false
}) {
  const styles = {
    primary: {
      backgroundColor: "#2563eb",
      color: "#ffffff"
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#111827"
    },
    danger: {
      backgroundColor: "#dc2626",
      color: "#ffffff"
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: "10px 16px",
        border: "none",
        borderRadius: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1
      }}
    >
      {children}
    </button>
  );
}

export default Button;
