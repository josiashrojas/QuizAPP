import { MouseEventHandler } from "react";

export default function Card(props: {className: string, answer: string, onClick:(answer:string)=>void}){
    return (
        <div 
            className={`flex w-full h-full shadow-md justify-center items-center transition-colors ease-linear  min-h-60 rounded-md text-lg ${props.className}`}
            onClick={(e)=>{
                e.preventDefault()
                props.onClick(props.answer)
            }}
        >
            <p>{props.answer}</p>
        </div>
    )
}