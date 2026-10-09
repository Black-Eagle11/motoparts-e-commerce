import Modal from "./Modal";
import Button from "./Button";

function ConfirmDialog({
  title = "Konfirmasi",
  message = "Apakah lu yakin?",
  onConfirm,
  onCancel
}) {
  return (
    <Modal title={title} onClose={onCancel}>
      <p>{message}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "20px"
        }}
      >
        <Button variant="secondary" onClick={onCancel}>
          Batal
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Ya, Lanjutkan
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
