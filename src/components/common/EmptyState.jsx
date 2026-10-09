function EmptyState({
  title = "Data tidak ditemukan",
  message = "Silakan coba kembali.",
  action
}) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px"
      }}
    >
      <h3>{title}</h3>

      <p>{message}</p>

      {action && <div>{action}</div>}
    </div>
  );
}

export default EmptyState;
