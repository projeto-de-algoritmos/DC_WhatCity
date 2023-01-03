import { useEffect, useState } from 'react'
import Question from './components/Question'
import './App.css'
import kSmallest from './logic/kSmallest';
import readFile from './logic/readCsv';

function App() {
  const [question, setQuestion] = useState('population');
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    readFile().then(res => setData(res));
  }, []);

  const getResult = () => {
    const res = kSmallest(data, number, question);
    setResult(res)
  }

  return (
    <div className="App">

      {data.length > 0 && <h1>
        There are {data.length} cities
      </h1>}

      {data
        && <Question
          number={number}
          handleChangeNumber={(event) => setNumber(event.target.value)}
          questions={[
            'population',
            'lat',
            'lng',
          ]}
          question={question}
          max={data.length}
          handleChangeQuestion={(event) => setQuestion(event.target.value)}
        />}
      <button onClick={getResult} className="getResultButton">Get the Answer</button>

      {result?.city &&
        <div className='Result'>
          <h1>
            The city is {result?.city}
          </h1>
          <h1>
            Of country {result?.country}
          </h1>
          <h1>
            With a {question} of {result[question]}
          </h1>
        </div>}
    </div>
  )
}

export default App
