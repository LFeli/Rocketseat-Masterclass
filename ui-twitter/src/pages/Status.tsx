import { useState, FormEvent, KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'

export function Status (){
  const [newAnswers, SetNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo....',
    'Olha faz sentido!',
    'Aiii sim.'
  ])

  function createNewAnswers(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    SetNewAnswers('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers, ...answers])
      SetNewAnswers('')
    }
  }

  return(
    <main className='status'>
      <Header tittle='Tweet'/>

      <Tweet content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni optio, quos corrupti quo sed numquam est nostrum iste quae accusamus natus autem eveniet maiores veritatis adipisci harum magnam, ullam perferendis?'/>

      <Separator />

      <form onSubmit={createNewAnswers} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/LFeli.png" alt="Lucas Felipe" />
          <textarea 
          id='tweet' 
          placeholder="Tweet your answer"
          value={newAnswers}
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            SetNewAnswers(event.target.value)
          }}
          />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answers => {
        return <Tweet key={answers} content={answers} />
      })}
    </main>
  )
}