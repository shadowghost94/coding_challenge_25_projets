export default function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span className="close-modal-icon" onClick={onClose}>
                        &times;
                    </span>
                    <h3>{header ? header : "Header"}</h3>
                </div>

                <div className="body">
                    {body ? (
                        body
                    ) : (
                        <div>
                            <p>Ceci est le body de notre modal</p>
                        </div>
                    )}
                </div>
                <div className="footer">
                    {footer ? footer : <h2>Footer</h2>}
                </div>
            </div>
        </div>
    );
}
