import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Review() {
    const history = useHistory();
    const feedback = useSelector(store => store.allFeedback)

    const submitFeedback = () => {
        axios({
            method:'POST',
            url: '/submitted',
            data: feedback
        }).then((response) => {
            console.log('feedback submitted');
        }).catch((error) =>{
            console.log('POST error', error);
        });
        history.push('/submitted')
    }

    return (
        <>
        <h2>Today's Reflection</h2>
        <h3>Feelings: {feedback[0]}</h3>
        <h3>Understanding: {feedback[1]}</h3>
        <h3>Support: {feedback[2]}</h3>
        <h3>Comments: {feedback[3]}</h3>
        <button onClick={submitFeedback}>Submit</button>
        
        </>
    )

}

export default Review;