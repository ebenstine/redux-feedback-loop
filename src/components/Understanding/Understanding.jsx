import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const [dailyComprehension, setDailyComprehension] = useState('');

    return (
        <>
            <h2>How would you rate your comprehension today?</h2>
            <div>
                <input
                    type="number"
                    onChange={(event) => setDailyComprehension(event.target.value)}
                    value={dailyComprehension}

                />
                <Link to={"/supported"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_DAILY_COMPREHENSION',
                            payload: dailyComprehension
                        })}
                    >Next</button>
                </Link>
            </div>
        </>
    )
}

export default Understanding;
