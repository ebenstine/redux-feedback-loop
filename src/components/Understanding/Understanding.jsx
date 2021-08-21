import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [dailyComprehension, setDailyComprehension] = useState('');

    const onButtonClick = () => {
        if (dailyComprehension === ''){
            alert('Please assign yourself a value')
        }   else if (dailyComprehension < 0){
            alert('The range is 1-5')
            setDailyComprehension(0);
        }   else if (dailyComprehension > 5){
            alert('The range is 1-5')
            setDailyComprehension(5);
        }   else {
            dispatch({
               type: 'ADD_DAILY_COMPREHENSION',
               payload: dailyComprehension
            });
            history.push('/supported')
        }
    }

    return (
        <>
            <h2>How would you rate your comprehension today?</h2>
            <div>
                <input
                    type="number"
                    onChange={(event) => setDailyComprehension(event.target.value)}
                    value={dailyComprehension}

                />
                
                    <button
                        onClick={onButtonClick}
                    >Next</button>
               </div>
        </>
    )
}

export default Understanding;
