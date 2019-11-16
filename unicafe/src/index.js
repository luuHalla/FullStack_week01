import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )


  const Statistic = ({text, value}) => {
    if (text === 'positive') {
      return(
        text + " " + value + '%'
      )
    }
      return (        
          text + " " + value
        
      
      )
  }

  const Statistics = (props) => {

    if (props.good+ props.neutral +props.bad === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    
    return (
        <table>
          <tbody>
          <tr>
            <td><Statistic text = "good" value = {props.good}/></td>
          </tr>
          <tr>
           <td><Statistic text = "neutral" value = {props.neutral}/></td>
          </tr>
          <tr>
          <td> <Statistic text = "bad" value = {props.bad}/> </td>
          </tr>           
          <tr>
          <td><Statistic text = "all" value ={props.good + props.neutral + props.bad}/></td> 
          </tr>
          <tr>
          <td><Statistic text = "average" value ={(props.good - props.bad)/(props.good + props.neutral + props.bad)}/></td>
          </tr> 
          <tr>
          <td><Statistic text = "positive" value ={100*props.good/(props.good + props.neutral + props.bad)}/></td>
          </tr>
          </tbody>
        </table>
      )

  }

const App = () => {  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {    
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
<div>
      <div>
          <h1>give feedback</h1>
            <Button onClick={handleGood} text ='good'/>
            <Button onClick={handleNeutral} text = 'neutral'/>
            <Button onClick={handleBad} text ='bad' />
          <h1>statistics</h1>
            <Statistics good ={good} neutral = {neutral} bad = {bad} />

      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)