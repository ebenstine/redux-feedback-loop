import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [dailyMood, setDailyMood] = useState('');

    const onButtonClick = () => {
        if (dailyMood === ''){
            alert('Please evaluate your mood today on a scale of 1-5')
        } else if (dailyMood < 0) {
            alert('Please enter a number 1-5')
            setDailyMood(0);
        } else if (dailyMood > 5) {
            alert('Please enter a number 1-5')
            setDailyMood(5);
        } else {
        dispatch({
            type: 'ADD_DAILY_MOOD',
            payload: dailyMood
        });
        history.push('/understanding');
        }
    }

    return (
        <>
            <h2>How are you feeling about today?</h2>
            <div>
                <input
                    type="number"
                    value={dailyMood}
                    onChange={(event) => setDailyMood(event.target.value)}
                    
                />
                
                <button
                    onClick={onButtonClick}
                >Next
                </button>
                
            </div>
        </>
    )
}

export default Feeling;
