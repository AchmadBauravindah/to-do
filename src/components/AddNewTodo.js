import React, { useState } from "react";
import Modal from "./Modal";

const AddNewTodo = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="AddNewTodo">
            <div className="btn">
                {/* Jika Button di klik maka nilai showModal akan true karena di setShowModal(true) */}
                <button onClick={() => setShowModal(true)}>+ New ToDo</button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>Hellow World</div>
                <button onClick={() => setShowModal(false)}>hide</button>
            </Modal>
        </div>
    );
};

export default AddNewTodo;
