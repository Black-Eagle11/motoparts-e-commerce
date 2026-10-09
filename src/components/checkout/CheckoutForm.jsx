import { useState } from "react";
import Button from "../common/Button";
import ErrorMessage from "../common/ErrorMessage";
import validateCheckout from "../../utils/validators";

function CheckoutForm({ onSubmit, loading = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateCheckout(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(form);
    }
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Data Pemesan</h2>

      <label htmlFor="checkout-name">Nama lengkap</label>
      <input
        id="checkout-name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <ErrorMessage message={errors.name} />

      <label htmlFor="checkout-phone">Nomor telepon</label>
      <input
        id="checkout-phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <ErrorMessage message={errors.phone} />

      <label htmlFor="checkout-address">Alamat lengkap</label>
      <textarea
        id="checkout-address"
        name="address"
        value={form.address}
        onChange={handleChange}
        required
      />
      <ErrorMessage message={errors.address} />

      <label htmlFor="checkout-payment">Metode pembayaran</label>
      <select
        id="checkout-payment"
        name="paymentMethod"
        value={form.paymentMethod}
        onChange={handleChange}
        required
      >
        <option value="">Pilih pembayaran</option>
        <option value="COD">Bayar di tempat (COD)</option>
        <option value="Transfer Bank">Transfer bank</option>
        <option value="E-Wallet">E-Wallet</option>
      </select>
      <ErrorMessage message={errors.paymentMethod} />

      <Button type="submit" disabled={loading}>
        {loading ? "Memproses..." : "Buat Pesanan"}
      </Button>
    </form>
  );
}

export default CheckoutForm;
