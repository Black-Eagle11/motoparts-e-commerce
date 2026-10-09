function validateCheckout(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Nama wajib diisi.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Nomor telepon wajib diisi.";
  } else if (!/^[0-9+\-\s]{10,16}$/.test(form.phone.trim())) {
    errors.phone = "Format nomor telepon tidak valid.";
  }

  if (!form.address.trim()) {
    errors.address = "Alamat wajib diisi.";
  }

  if (!form.paymentMethod) {
    errors.paymentMethod = "Pilih metode pembayaran.";
  }

  return errors;
}

export default validateCheckout;
