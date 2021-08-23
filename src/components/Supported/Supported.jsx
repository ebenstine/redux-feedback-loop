import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Supported () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [dailySupport, setDailySupport] = useState('');
//logic to ensure the input is properly limited
    const onButtonClick = () => {
        if (dailySupport === ''){
            alert('Please input a value')
        } else if (dailySupport < 1) {
            alert('Oof ok, but the range is 1-5')
            setDailySupport(0);
        } else if (dailySupport > 5) {
            alert('Awesome, but the range is 1-5')
            setDailySupport(5);
        } else {
        //dispatch statement
        dispatch({
            type: 'ADD_DAILY_SUPPORT',
            payload: dailySupport
        });
        history.push('/comments');
        }
    }
    const backFromSupported = () => {
        dispatch({
            type: 'GO_BACK'
        });
        history.push('/understanding')
    }
//appending data
    return (
        <>
            <h2>How well do you feel you were supported today?</h2>
            <div>
                <input
                    type="number"
                    placeholder="scale of 1-5"
                    onChange={(event) => setDailySupport(event.target.value)}
                    value={dailySupport}

                />
                
                    <button
                        onClick={onButtonClick}
                            
                    >Next
                    </button>
                    <button 
                        onClick={backFromSupported}
                    >Go Back
                    </button>
                
               </div>
        </>
    )
}

export default Supported;
