import { useState } from "react"
import { AdviceGenerator } from "./components/AdviceGenerator"

function App() {
  const [id, setId] = useState('')
  const [advice, setAdvice] = useState('')


  function getAdvice(generatedAdvice) {
    setId(JSON.stringify(generatedAdvice.id))
    setAdvice(JSON.stringify(generatedAdvice.advice))
  }

  return (
    <div className="container">
      <div className="advice-wrapper">
        {id == '' ? <p className="advice-number"></p>: <p className="advice-number">ADVICE #{id}</p>}
        {advice == '' ? <p className="advice-text">Generate a quote!</p>: <p className="advice-text">{advice}</p>}
      </div>
      <AdviceGenerator generate={getAdvice}></AdviceGenerator>
    </div>
  )
}

export default App
