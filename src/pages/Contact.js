import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [url, setUrl] = useState('https://');
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);

  const generateQRCode = async () => {
    setLoading(true);
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      url,
    )}`;
    setQrCode(qrCodeUrl);
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateQRCode();
  };

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
  };

  return (
    <section className="contact">
      <h1>Contact Page</h1>
      <div className="contact-block">
        <form onSubmit={handleSubmit}>
          <label>
            Enter URL:
            <input
              type="url"
              value={url}
              onChange={handleUrlChange}
              // onChange={(e) => setUrl(e.target.value)}
              required
            />
          </label>
          <button type="submit">Generate QR Code</button>
        </form>
      </div>
      {loading && <h2>Generating QR Code...</h2>}
      {qrCode && !loading && (
        <div className="qr-code">
          <h2>Your QR Code:</h2>
          <img src={qrCode} alt="Generated QR Code" />
        </div>
      )}
    </section>
  );
};

export default Contact;
