import { useState } from "react"
import rules from "./data/rules"
import Header from "./components/header"
import SearchBar from "./components/shearchBar"
import RuleList from "./components/listrules"
function App() {

  const [allRules] = useState(rules);

  const [filteredRules, setFilteredRules] = useState(rules);




  return (
    <main className="min-h-screen flex flex-col items-center gap-6">
      <Header title="REGLAMENTO SENA" subtitle="Aplicación de Normas y Convivencia" img="../public/img/logoSena.png" />


      <SearchBar
        data={allRules}
        setFilteredData={setFilteredRules}
      />
      <div className="flex flex-col">
        <RuleList rules={filteredRules} />


      </div>


    </main>
  )
}

export default App
