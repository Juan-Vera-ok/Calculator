import React,{useState} from "react";
export default function TextDisplay({ value, onChange,className }) {
    
    return (
        <div className={"text-display " + className}>
            {value}
        </div>
    );
}