import React from 'react'

export default function Modal({ id, modalTitle, modalContent, modalLarge=false }) {
    const modalDialogClass = modalLarge? "modal-dialog modal-lg" : "modal-dialog";

    return (
        <div className="modal fade" id={id}>
            <div className={modalDialogClass}>
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">{modalTitle}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        {modalContent}
                    </div>
                </div>
            </div>
        </div>
    );
}
