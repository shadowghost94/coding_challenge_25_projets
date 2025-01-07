import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput("");
    }

    return (
        <div className="qr-code-container">
            <h1>Générateur de QR Code </h1>
            <div>
                <input
                    type="text"
                    placeholder="Entrer une valeur ici"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    disabled={input && input.trim() != "" ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={300}
                    bgColor="#fff"
                />
            </div>
        </div>
    );
}
