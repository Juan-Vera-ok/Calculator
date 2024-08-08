import React from 'react';

export default function Button({ label, onClick }) {
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