import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Comments () {
    const dispatch = UseDispatch();
    const [comments, setComment] = useState('')

    return (
        <>
            <h2>Anything you'd like us to know?</h2>
            <div>
                <input
                    type="text"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}

                />
                <Link to={"/review"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_COMMENTS',
                            payload: comments
                        })}
                    >Next</button>
                </Link>
            </div>
        </>
    )
}

export default Comments;