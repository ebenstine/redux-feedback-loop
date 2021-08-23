import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [dailyComprehension, setDailyComprehension] = useState('');
//logic to ensure the input is properly limited
    const onButtonClick = () => {
        if (dailyComprehension === ''){
            alert('Please assign yourself a value')
        }   else if (dailyComprehension < 1){
            alert('Oof ok, but the range is 1-5')
            setDailyComprehension(0);
        }   else if (dailyComprehension > 5){
            alert('Awesome, but the range is 1-5')
            setDailyComprehension(5);
        }   else {
            //dispatch statement
            dispatch({
               type: 'ADD_DAILY_COMPREHENSION',
               payload: dailyComprehension
            });
            history.push('/supported')
        }
    }
    const backFromUnderstanding = () => {
        dispatch({
            type: 'RESET_FEEDBACK'
        });
        history.push('/')
    }
//appending data
    return (
        <>
            <h2>How would you rate your comprehension today?</h2>
            <div>
                <input
                    type="number"
                    placeholder="scale of 1-5"
                    onChange={(event) => setDailyComprehension(event.target.value)}
                    value={dailyComprehension}

                />
                
                    <button
                        onClick={onButtonClick}
                    >Next</button>
                    <button 
                        onClick={backFromUnderstanding}
                    >Go Back</button>
               </div>
        </>
    )
}

export default Understanding;
