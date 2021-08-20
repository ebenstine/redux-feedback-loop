import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Feeling () {
    const dispatch = useDispatch();
    const [dailySupport, setDailySupport] = useState('');

    return (
        <>
            <h2>How well do you feel you were supported today?</h2>
            <div>
                <input
                    type="number"
                    onChange={(event) => setDailySupport(event.target.value)}
                    value={dailySupport}

                />
                <Link to={"/comments"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_DAILY_MOOD',
                            payload: dailySupport
                        })}
                    >Next</button>
                </Link>
            </div>
        </>
    )
}

export default Feeling;
