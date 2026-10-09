function Loading({ message = "Memuat data..." }) {
  return (
    <div
      role="status"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px",
        gap: "12px"
      }}
    >
      <span aria-hidden="true">⏳</span>
      <p>{message}</p>
    </div>
  );
}

export default Loading;
