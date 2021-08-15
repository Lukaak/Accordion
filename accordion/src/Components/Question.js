import React from 'react'
import './Question.css'
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc"
import { useState } from 'react'

const Question = ({Question,Text}) => {
    const [status, setStatus] = useState(false)

    const IconDisplay = (DisplayValue) => {
        if(!DisplayValue){
            return <VscAdd className="icon" />;
        }
            return <VscChromeMinimize className="icon"/>
    }

    return (
        
        <div className={status?"QuestionCont Active":"QuestionCont"} onClick={()=>{setStatus(!status)}}>
            <div className="UnderCont">
                <div>{Question}</div>  <div>{IconDisplay(status)}</div>
            </div>
                {status?Text:""}
        </div>
    )
}

export default Question