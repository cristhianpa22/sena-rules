import { useState } from "react"
import rules from "./data/rules"
import Header from "./components/header"
import SearchBar from "./components/SearchBar"
import RuleList from "./components/ruleList"
import TaskCompleted from "./components/taskcompleted"
import Tips from "./components/tips"
import Footer from "./components/footer"

function App() {
  const [allRules] = useState(rules);
  const [filteredRules, setFilteredRules] = useState(rules);
  const [completedCount, setCompletedCount] = useState(0);
  function onToggleCompliance(isCompleted) {
    setCompletedCount((prev) => Math.max(0, prev + (isCompleted ? 1 : -1)));
  }
  return (
    <main className="min-h-screen flex flex-col items-center gap-6">
      <Header title="REGLAMENTO SENA" subtitle="Aplicación de Normas y Convivencia" img="../public/img/logoSena.png" />

      <section className="grid grid-cols-1 lg:grid-cols-2 w-full  items-center gap-5 px-4 max-w-6xl">
        <SearchBar
          data={allRules}
          setFilteredData={setFilteredRules}
        />
        <TaskCompleted completedCount={completedCount} />
      </section>
      <div className="flex flex-col">
        <RuleList rules={filteredRules} onToggleCompliance={onToggleCompliance} />
      </div>
      <div id="tips" className="border-emerald-950 shadow-2xl w-full max-w-6xl p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-emerald-950  text-left"><i c="fas fa-lightbulb"></i>Consejos para una mejor convivencia:</h2>
        <ul className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Tips option="Respeta a tus compañeros y al personal." />
          <Tips option="Mantén limpio tu entorno de trabajo." />
          <Tips option="Cumple con los horarios establecidos." />
          <Tips option="Comunica cualquier problema o inquietud." />
          <Tips option="Participa activamente en las actividades grupales." />
        </ul>
      </div>
      <Footer copyrightYear={2024} companyName="SENA Rules" ancla1="./App.jsx" ancla2="#card" />
    </main>
  )
}

export default App
