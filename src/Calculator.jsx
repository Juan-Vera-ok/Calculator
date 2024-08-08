import React,{useEffect, useState}from "react";
import Button from "./Button";
import TextDisplay from "./TextDisplay";


export default function Calculator() {
    let [valuePrimary,setValuePrimary]=useState('');
    let [valueSecondary,setValueSecondary]=useState('');
    let [valueOperation,setValueOperation]=useState('');


    let  handleOnClickButtonNumber= e=>{
        setValuePrimary(valuePrimary=valuePrimary+e.target.textContent)
    }

    let handleOnClickButtonOperation= e=>{
        if(valuePrimary!==''&&valueSecondary!==''){
            resolveActualOperation();
        }
        setValueSecondary(valueSecondary=valuePrimary)
        setValuePrimary('')
        setValueOperation(valueOperation=e.target.textContent)
        
    }

    let resolveActualOperation=()=>{
        switch (valueOperation) {
            case '+':
                setValuePrimary(valuePrimary=parseInt(valueSecondary)+parseInt(valuePrimary))
                break;
            case '-':
                setValuePrimary(valuePrimary=parseInt(valueSecondary)-parseInt(valuePrimary))
                break;
            case '*':
                setValuePrimary(valuePrimary=parseInt(valueSecondary)*parseInt(valuePrimary))
                break;
            case '/':
                setValuePrimary(valuePrimary=parseInt(valueSecondary)/parseInt(valuePrimary))
                break;
            default:
                break;
        }
    }

    let handleOnClickButtonResult= e=>{
        resolveActualOperation();
        setValueSecondary('')
        setValueOperation('')
    }

    return <div className="calculator-root"><div>
        
    </div>
        <div className="calculator-section secondary-text-display-container">
            <TextDisplay value={valueSecondary} className={"secondary-text-display"}></TextDisplay>
        </div>
    
        <div className="calculator-section">
            <TextDisplay value={valuePrimary} className={"primary-text-display"}></TextDisplay>
        </div>
        <div className="controls-container">
            <div className="calculator-section number-inputs-container ">
                <div>
                    <Button label={1} onClick={handleOnClickButtonNumber}/>
                    <Button label={2} onClick={handleOnClickButtonNumber}/>
                    <Button label={3} onClick={handleOnClickButtonNumber}/>
                </div>
                <div>
                    <Button label={4} onClick={handleOnClickButtonNumber}/>
                    <Button label={5} onClick={handleOnClickButtonNumber}/>
                    <Button label={6} onClick={handleOnClickButtonNumber}/>
                </div>
                
                <div>
                    <Button label={7} onClick={handleOnClickButtonNumber}/>
                    <Button label={8} onClick={handleOnClickButtonNumber}/>
                    <Button label={9} onClick={handleOnClickButtonNumber}/>
                </div>
                
                <div>
                    <Button label={0} onClick={handleOnClickButtonNumber}/>
                </div>
            </div>
            <div className="calculator-section operation-inputs-container">
                <Button label={"+"} onClick={handleOnClickButtonOperation}/>
                <Button label={"-"} onClick={handleOnClickButtonOperation}/>
                <Button label={"*"} onClick={handleOnClickButtonOperation}/>
                <Button label={"/"} onClick={handleOnClickButtonOperation}/>
                <Button label={"="} onClick={handleOnClickButtonResult}/>
            </div>
        </div>
    </div>;
}