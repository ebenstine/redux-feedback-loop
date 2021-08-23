import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//no limitation needed here because a comment is not required
function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('')

    const onButtonClick = () => {
        dispatch({
            //dispatch statement
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review');
    }

    const backFromComments = () => {
        dispatch({
            type: 'GO_BACK'
        });
        history.push('/supported')
    }
//appending data
    return (
        <>
            <h2>Is there anything else on your mind?</h2>
            <div>
                <input
                    type="text"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}

                />
                
                    <button
                        onClick={onButtonClick}
                    >Next
                    </button>
                    <button 
                        onClick={backFromComments}
                    >Go Back
                    </button>
                
            </div>
        </>
    )
}

export default Comments;
