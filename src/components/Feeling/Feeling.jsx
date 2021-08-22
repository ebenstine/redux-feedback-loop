import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [dailyMood, setDailyMood] = useState('');
//logic to ensure the input is properly limited
    const onButtonClick = () => {
        if (dailyMood === ''){
            alert('Please evaluate your mood today on a scale of 1-5')
        } else if (dailyMood < 1) {
            alert('Oof ok, but the range is 1-5')
            setDailyMood(0);
        } else if (dailyMood > 5) {
            alert('Awesome, but the range is 1-5')
            setDailyMood(5);
        } else {
        dispatch({
            //dispatch statement
            type: 'ADD_DAILY_MOOD',
            payload: dailyMood
        });
        history.push('/understanding');
        }
    }
//appending data
    return (
        <>
            <h2>How are you feeling about today?</h2>
            <div>
                <input
                    type="number"
                    placeholder="enter 1-5"
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
