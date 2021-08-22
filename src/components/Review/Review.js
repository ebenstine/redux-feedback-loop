import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.allFeedback)
    


    const submitFeedback = () => {
        if (feedback.length !== 4){
            alert ('You have given an answer, LET IT BE')
            dispatch({
            type: 'SUBMIT_RESET',
        });
        history.push("/")
        } else {
        axios({
            method:'POST',
            url: '/feedback',
            data: {
                feeling: feedback[0],
                understanding: feedback[1],
                support: feedback[2],
                comments: feedback[3]
            }
        }).then((response) => {
            console.log(response.data);
            console.log('feedback submitted');
        }).catch((error) =>{
            console.log('POST error', error);
        });
        history.push('/submitted');
        }
    }
    return (
        <>
        <h2>Your Self-Reflection for Today:</h2>
        <h3>Feelings: {feedback[0]}</h3>
        <h3>Understanding: {feedback[1]}</h3>
        <h3>Support: {feedback[2]}</h3>
        <h3>Comments: {feedback[3]}</h3>
        <button onClick={submitFeedback}>Submit</button>
        
        </>
    )

}

export default Review;
