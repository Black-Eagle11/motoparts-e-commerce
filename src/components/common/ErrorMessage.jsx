function ErrorMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <p
      role="alert"
      style={{
        color: "#dc2626",
        backgroundColor: "#fef2f2",
        padding: "12px",
        borderRadius: "8px",
        margin: "8px 0"
      }}
    >
      {message}
    </p>
  );
}

export default ErrorMessage;
