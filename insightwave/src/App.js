import { useState } from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedBackData"
function App() {

  const [feedback, setFeedback] = useState(FeedbackData)


return(
<>
  <Header />
    <div className="container">
    <FeedbackList feedback={feedback} />
    </div>
</>
  
)
}


export default App
