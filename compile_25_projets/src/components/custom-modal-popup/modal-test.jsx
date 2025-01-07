import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }
    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {showModalPopup && (
                <Modal
                    id="custom-id"
                    body={<div>Body Customisé</div>}
                    header={<h1>Notre header customisé</h1>}
                    footer={<h1>Notre footer customisé</h1>}
                    onClose={onClose}
                />
            )}
        </div>
    );
}
