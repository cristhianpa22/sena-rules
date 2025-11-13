export default function Header({ title, subtitle, img, alt }) {
    return (
        <header   className="bg-green-700 text-white  p-4 shadow-md w-full  border-b-6 border-b-green-500">
            <div className="flex items-center justify-center md:justify-start max-w-6xl mx-auto py-2">
                <img src={img} alt={alt} className="w-15 h-15 md:w-20 md:h-20 mr-7 " />
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold mb-1 leading-tight">{title}</h1>
                    <p className="text-md md:text-lg opacity-90">{subtitle}</p>
                </div>
            </div>

            
        </header>
    );
}