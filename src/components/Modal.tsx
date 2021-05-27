import React from 'react';

function Modal(props:any) {
    let { modalActive, setModalActive } = props
    return (
        <div
            className={modalActive ? 'modal modal--active' : 'modal'}
            onClick={() => setModalActive(!modalActive)}
        >
            <div
                className={modalActive ? 'modal__content modal__content--active' : 'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                {props.children(props)}
            </div>
        </div>
    )
}

export default Modal;