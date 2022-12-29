import { useState } from 'react'
import Question from './components/Question'
import './App.css'

function App() {
  const [question, setQuestion] = useState('have the most people')

  return (
    <div className="App">
      <Question
        questions={[
          'have the most people',
          'have the best weather',
          'have the best food',
          'have the best sports teams',
        ]}
        question={question}
        handleChangeQuestion={(event) => setQuestion(event.target.value)}
      />

      <div className='Result'>
        <h1>Aqui fica o Resultado ...</h1>
      </div>
    </div>
  )
}

export default App
