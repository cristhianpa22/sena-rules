export default function Footer({ copyrightYear, companyName, ancla1, ancla2 }) {
    return (
        <footer
            className="mt-8 w-full bg-green-700 text-white  p-4 shadow-md border-t-6 border-green-500">

            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-between items-center text-xl mb-4">

                    <p className=" md:order-1 text-center md:text-left mt-2 md:mt-0 ">
                        &copy; {copyrightYear} {companyName}. Todos los derechos reservados.
                    </p>

                    <div className="order-1 md:order-2 flex justify-center gap-4 ">
                        <a href="http://senasofiaplus.edu.co/sofia-public/" >SENA SofiaPlus</a>
                        <a href="https://senacertificados.co/reglamento-del-aprendiz-sena/" >Reglamento completo</a>
                    </div>
                </div>

                <hr className="w-full h-px mx-auto bg-gray-200 border-0 rounded"/>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mt-4">

                        <a href={ancla1} className="text-base font-medium py-1 md:py-0" aria-label="Inicio">
                            Inicio
                        </a>

                        <a href={ancla2} className="text-base font-medium py-1 md:py-0" aria-label="Reglas">
                            Reglas
                        </a>
                    </div>
            </div>
        </footer>

    );
}