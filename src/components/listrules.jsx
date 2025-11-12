import RuleCard from './rulecard';
export default function RuleList({ rules }) {

    if (!rules || rules.length === 0) {
        return (
            <div className="w-full p-8 text-center bg-gray-50 rounded-lg shadow">
                <p className="text-xl font-semibold text-gray-700">
                    No se encontraron reglas que coincidan con la búsqueda.
                </p>
                <p className="text-gray-500 mt-2">Intenta con otra palabra clave.</p>
            </div>
        );
    }

    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-7xl">
            {rules.map((rule) => (
                <RuleCard 
                    key={rule.id}          
                    ruleData={rule}        
                />
            ))}
        </section>
    );
}