import React, { useState } from 'react'
import postApi from '../hooks/postApi';
import getApi from '../hooks/getApi';

function Modal({ modal: { modal, setModal } }) {
    const { data } = postApi('/products');

    const [obj, setObj] = useState({
        title: "",
        description: "",
        price: "",
        image: "",
    });

    function changeObj(e) {
        const { name, value } = e.target;
        setObj(prev => ({
            ...prev,
            [name]:value
        }))
    }

    function send(){
        postApi('/products', obj)
    }

    getApi('/products');

    return (
        <div className={`modal ${modal ? 'active' : ''}`}>
            <div className="modal__window">
                <input type="text" name="title" placeholder='Title' value={obj.title} onChange={changeObj} />
                <input type="text" name="description" placeholder='Description' value={obj.description} onChange={changeObj} />
                <input type="text" name="price" placeholder='Price' value={obj.price} onChange={changeObj} />
                <input type="text" name="image" placeholder='Image' value={obj.image} onChange={changeObj} />
                <button onClick={() => send()}>Add</button>
                <button onClick={() => setModal(false)}>Close</button>
            </div>
        </div>
    )
}

export default Modal