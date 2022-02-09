import React, { useRef } from "react";

const Modal = ({ children, showModal, setShowModal }) => {
    // useRef() digunakan untuk mengambil elemnent yang ada pada kelas Modalnya
    const modalRef = useRef();

    // e (event) target jika diklik maka setShowModal menjadi False
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    };
    return (
        // Ini akan beernilai False jika tombol selain ref={modalRef} ditekan
        showModal && (
            // ref={modalRef} artinya dia akan refrensi element ini kedalam variabel modalRef
            <div className="Modal" ref={modalRef} onClick={closeModal}>
                <div className="container">{children}</div>
            </div>
        )
    );
};

export default Modal;
