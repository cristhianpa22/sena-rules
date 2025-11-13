
export default function TaskCompleted({ completedCount }) {

    const totalTasks = 6;
    const remainingCount = totalTasks - completedCount;
    const allCompleted = remainingCount === 0 && totalTasks > 0;

    const progressClass = allCompleted
        ? 'bg-green-500  text-center'
        : 'bg-yellow-500 text-white p-2 rounded-lg text-center';

    return (

        <div className={`w-full max-w-6xl text-center text-white p-3 rounded-xl shadow-lg transition-colors duration-300 ${progressClass}`}>
            <h2>Normas cumplidas <strong>{completedCount}</strong></h2>


            {allCompleted ? (
                
                <div className="mt-2 text-white font-bold  p-1 rounded">
                    ¡Felicidades! 🎉 Has completado todas las normas asignadas.
                </div>
            ) : (
                
                <div className="mt-2 text-white font-medium">
                    Te faltan solo {remainingCount} reglas. ¡Ánimo, tú puedes!
                </div>
            )}

        </div>
    );

}