import React from "react";
import TextField from "./TextDisplay";
import Button from "./Button";

export default function Calculator() {
    return <div className="calculator-root">
        <div className="calculator-section secondary-text-display-container">
            <TextField value={"2"} className={"secondary-text-display"}></TextField>
        </div>
    
        <div className="calculator-section">
            <TextField value={"100000000"} className={"primary-text-display"}></TextField>
        </div>
        <div className="controls-container">
            <div className="calculator-section number-inputs-container ">
                <div>
                    <Button label={1}/>
                    <Button label={2}/>
                    <Button label={3}/>
                </div>
                <div>
                    <Button label={4}/>
                    <Button label={5}/>
                    <Button label={6}/>
                </div>
                
                <div>
                    <Button label={7}/>
                    <Button label={8}/>
                    <Button label={9}/>
                </div>
                
                <div>
                    <Button label={0}/>
                </div>
            </div>
            <div className="calculator-section operation-inputs-container">
                <Button label={"+"}/>
                <Button label={"-"} />
                <Button label={"*"} />
                <Button label={"/"} />
                <Button label={"="} />
            </div>
        </div>
    </div>;
}