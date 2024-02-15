import React from 'react';
import './Modal.scss';

function Modal({ item, closeModal }) {
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p><strong>Tech used:</strong> {item.tech}</p>
                <button className="close-button" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal;