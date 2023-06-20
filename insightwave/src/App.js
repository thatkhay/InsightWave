import { useState } from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedBackData"
import FeedbackStats from "./component/FeedbackStats"


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)
const deletFeedback =(id) => {
  if(window.confirm('Are you sure yu want to delete ?'
   )){
    setFeedback(feedback.filter((item) => item.id !== id))
   }
}

return(
<>
  <Header />
    <div className="container">
      <FeedbackStats/>
    <FeedbackList feedback={feedback} />
    handleDelete={deletFeedback}
    </div>
</>
  
)
}


export default App
