import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Review() {
    const history = useHistory();
    const feedback = useSelector(store => store.allFeedback)
    const dispatch = useDispatch();


    const submitFeedback = () => {
        if (feedback.length > 4){
            alert ('Cannot revisit given answers')
            dispatch({
                type: 'RESET_FEEDBACK',
            });
        } else {
        axios({
            type:'POST',
            url: '/submitted',
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
            console.log('BIGTIME POST error', error);
        });
        history.push('/submitted')
        }
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