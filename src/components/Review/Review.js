import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.allFeedback)
    


    const submitFeedback = () => {
        //this enforces that if the feedback array's length is not 4, the submit will not comply
        //the user can go back to previous pages, but what they input will not be valid
        //this is a pretty choppy way to accomplish the goal, but it works
        //i think it fulfills the intent of the instruction that they 'cannot go back' if not the literal meaning
        //will keep trying
        if (feedback.length !== 4){
            alert ('We received your answer, let it be')
            dispatch({ 
            type: 'SUBMIT_RESET',
        });
        history.push("/")
        } else {
        //posting feedback to the database
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
        //appending feedback
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
