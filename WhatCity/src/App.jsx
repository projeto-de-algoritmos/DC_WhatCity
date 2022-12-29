import { useState } from 'react'
import Question from './components/Question'
import './App.css'
import { useEffect } from 'react';
import kSmallest from './logic/kSmallest';
import readFile from './logic/readCsv';

function App() {
  const [question, setQuestion] = useState('population');
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState({ city: ''});
  const data = readFile();

  const getResult = () => {
    setResult(kSmallest(data, number, question));
    console.log(result)
  }

  return (
    <div className="App">
      <Question
        number={number}
        handleChangeNumber={(event) => setNumber(event.target.value)}
        questions={[
          'population',
          'lat',
          'lng',
        ]}
        question={question}
        handleChangeQuestion={(event) => setQuestion(event.target.value)}
      />
      <button onClick={getResult} className="getResultButton">Get the Aswer</button>

      <div className='Result'>
        <h1>
          The city is {result?.city}
          {result && ('with ' + result[question] + ' ' + question)}
        </h1>
      </div>
    </div>
  )
}

export default App
