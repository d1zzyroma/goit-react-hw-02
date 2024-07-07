import css from "./App.module.css"
import { useState, useEffect } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const stats = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
    
      <div className={css.container}>
        <Description />
        <Options 
        updateFeedback = {updateFeedback}
        totalFeedback = {totalFeedback}
        resetFeedback = {resetFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback 
          goodCount = {feedback.good}
          neutralCount = {feedback.neutral}
          badCount = {feedback.bad}
          totalFeedback={totalFeedback} 
          stats = {stats}
          />
          
        ):(
          <Notification message = "No Feedback yet"/>
        )}
      </div>

    </>
  )
}

export default App

