function Modal({ title, children, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        zIndex: 1000
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          backgroundColor: "#ffffff",
          color: "#111827",
          padding: "24px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "450px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <h2>{title}</h2>

          <button onClick={onClose} aria-label="Tutup modal">
            ×
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
