import { useState } from "react";
export default function RuleCard({ ruleData }) {


    const [iscompleted, setIsCompleted] = useState(false);

    const toggleCompliance = () => {
        setIsCompleted(prevState => !prevState)

    }

    const buttonText = iscompleted ? 'completado ✅' : 'Marcar como Cumplida';
    const buttonClass = iscompleted
        ? 'bg-green-500 hover:bg-green-700'
        : 'bg-yellow-500 hover:bg-yellow-600';
    const borderClass = iscompleted
        ? 'border-green-500 shadow-xl'
        : 'border-yellow-500 shadow-md';

    const { title, category, description,children} = ruleData;

    return (

        <div className={`border-l-13 ${borderClass} rounded-lg shadow-md p-4 m-4 max-w-md w-full`}>
            <h2 className="text-xl font-bold mb-2 text-emerald-950 ">{title}</h2>
            <p className=" mb-4  text-emerald-500">{category}</p>
            <div className="text-sm text-gray-500">{description}</div>
            <div>
                {children}
            </div>
            <button onClick={toggleCompliance} className={`mt-4 ${buttonClass} text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500`}>
                {buttonText}
            </button>
            
        </div>

 );



}