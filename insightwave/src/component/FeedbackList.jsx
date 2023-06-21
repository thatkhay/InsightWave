import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
function feedbackList({feedback}) {

    if (!feedback || feedback.length === 0) {
        return <p>No FeedBack Yet</p>
    }
  return (
    <div className="feedback-list">
     {feedback.map((item) => 
       ( <FeedbackItem key={item.id} item={item}/>
       
       ))}
    </div>
  )
}
feedbackList.propTypes = {
  feedback: PropTypes.array,
}

export default feedbackList