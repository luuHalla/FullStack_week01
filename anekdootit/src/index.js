import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const points =  Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0)
  const [votes, setVote] = useState(points)  
  const maxInd = votes.indexOf(Math.max(...votes))
  
  const nextAnec = () => {    
    setSelected(Math.floor(Math.random() * 6))
  }
  
  const handleVote = (ind) => {    
    const copy = [...votes]
    copy[ind] += 1
    setVote(copy)
    
  }
  
  

  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}        
        <br/>
        has {votes[selected]} votes
        <br/>        
        <Button onClick={() => handleVote(selected)} text ='vote'/>
        <Button onClick={nextAnec} text ='next anecdote'/> 
        <h1>Anecdote with most votes</h1>
        {props.anecdotes[maxInd]}        
        <br/>
        has {votes[maxInd]} votes
        <br/>

        
    </div>
  )

}





const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
