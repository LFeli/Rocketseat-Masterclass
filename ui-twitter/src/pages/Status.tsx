import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'

const answers = [
  'Concordo....',
  'Olha faz sentido!',
  'Aiii sim.'
]

export function Status (){
  return(
    <main className='status'>
      <Header tittle='Tweet'/>

      <Tweet content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni optio, quos corrupti quo sed numquam est nostrum iste quae accusamus natus autem eveniet maiores veritatis adipisci harum magnam, ullam perferendis?'/>

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/LFeli.png" alt="Lucas Felipe" />
          <textarea id='tweet' placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answers => {
        return <Tweet key={answers} content={answers} />
      })}
    </main>
  )
}