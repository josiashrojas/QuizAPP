export default function Card(props: {color: string, answer: string,}){
    return (
        <div className={`flex w-full h-full shadow-md justify-center items-center  bg-${props.color}-100 hover:bg-${props.color}-300 transition-colors ease-linear  min-h-60 rounded-md`}>
            <p>{props.answer}</p>
        </div>
    )
}