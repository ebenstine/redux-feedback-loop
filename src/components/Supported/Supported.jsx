import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Supported () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [dailySupport, setDailySupport] = useState('');

    const onButtonClick = () => {
        if (dailySupport === ''){
            alert('Please input a value')
        } else if (dailySupport < 0) {
            alert('Please enter a number 1-5')
            setDailySupport(0);
        } else if (dailySupport > 5) {
            alert('Please enter a number 1-5')
            setDailySupport(5);
        } else {
        dispatch({
            type: 'ADD_DAILY_SUPPORT',
            payload: dailySupport
        });
        history.push('/comments');
        }
    }

    return (
        <>
            <h2>How well do you feel you were supported today?</h2>
            <div>
                <input
                    type="number"
                    onChange={(event) => setDailySupport(event.target.value)}
                    value={dailySupport}

                />
                
                    <button
                        onClick={onButtonClick}
                            
                    >Next
                    </button>
               </div>
        </>
    )
}

export default Supported;
