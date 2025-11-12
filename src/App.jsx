
import Header from "./components/header"
import SearchBar from "./components/shearchBar"
function App() {
  

  

  return (
   <main className="min-h-screen flex flex-col items-center gap-6">
    <Header  title="REGLAMENTO SENA" subtitle="Aplicación de Normas y Convivencia" img="../public/img/logoSena.png"/>
    <section className="grid grid-cols-1 lg:grid-cols-3">
    <SearchBar/>
    </section>
   </main>
  )
}

export default App
