import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Feeling () {
    const dispatch = useDispatch();
    const [dailyMood, setDailyMood] = useState('');

    return (
        <>
            <h2>How are you feeling about today?</h2>
            <div>
                <input
                    type="number"
                    
                    onChange={(event) => setDailyMood(event.target.value)}
                    value={dailyMood}

                />
                <Link to={"/understanding"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_DAILY_MOOD',
                            payload: dailyMood
                        })}
                    >Next</button>
                </Link>
            </div>
        </>
    )
}

export default Feeling;
