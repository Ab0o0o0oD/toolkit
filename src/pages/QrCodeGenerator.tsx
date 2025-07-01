import {useState} from "react";
import {QRCodeCanvas} from "qrcode.react";

export const QRGenerator = () =>{
    const [url, setUrl] = useState('');

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Enter URL to Generate QR Code</h2>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                style={{ padding: '0.5rem', width: '300px' }}
            />
            <div style={{ marginTop: '1rem' }}>
                {url && <QRCodeCanvas value={url} size={200} />}
            </div>
        </div>
    );
}