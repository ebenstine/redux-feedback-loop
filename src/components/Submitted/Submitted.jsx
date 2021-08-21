import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Submitted() {
    const dispatch = useDispatch();
    const history = useHistory();
    const onButtonClick = () => {
        dispatch({
            type: 'SUBMIT_AND_RESET',
        });
        history.push("/")
    }
    return (
        <>
        <h1>Thank you for your feedback!</h1>
        <button onClick={onButtonClick}>Any new thoughts?</button>
        </>
    )


}

export default Submitted;

