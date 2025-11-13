import { useState } from "react";

export default function SearchBar({ data, setFilteredData }) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term === '') {
            setFilteredData(data);
        } else {
            const results = data.filter(item => {
                return item.title.toLowerCase().includes(term.toLowerCase());

            });
            setFilteredData(results);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form className="flex items-center justify-center w-full px-4 mb-6"
            onSubmit={handleSubmit}>

            <div className="relative flex-grow max-w-6xl">
                <label htmlFor="search-input" >Buscar norma por titulo</label>
                <input
                    id="search-input"
                    type="text"
                    name="q"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full border border-gray-300 h-12 shadow-sm p-4 pr-10 rounded-full text-gray-700 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                    placeholder:text-gray-400"
                    placeholder="Filtrar por título..."
                    aria-label="Introduce tu término de búsqueda"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1 text-gray-400 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-1" aria-label="Botón de búsqueda">
                    <i className="fa-solid fa-magnifying-glass text-lg"></i>
                </button>
            </div>
        </form>
    );
};



