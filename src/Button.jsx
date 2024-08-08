import React,{useState} from 'react';

export default function Button({ label, onClick }) {
    const [valueButton,setValueButton]=useState(0);
    return (
        <button
            type="button"
            className="button"
            onClick={onClick}
        >
           {label}
        </button>
    );
}