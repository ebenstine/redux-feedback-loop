import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FeedbackSubmitted() {
    const dispatch = useDispatch();
    const history = useHistory();
    const onButtonClick = () => {
        dispatch({
            type: 'RESET_FEEDBACK',
        });
        history.push("/")
    }

    return (
        <>
        <h1>Thank you for your feedback!</h1>
        <button onClick={onButtonClick}>Wait, was there something else?</button>
        </>
    )
}

export default FeedbackSubmitted;
