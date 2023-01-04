import React, { useState } from 'react'; 
import LunchHistoryRegisterInput from './LunchHistoryRegisterInput';
import LunchHistoryRegisterSelect from './LunchHistoryRegisterSelect';

const LunchHistoryRegister = (props) => {
    const lunchMenus = props.items;

    const [ registerForm, setRegisterForm ] = useState(<LunchHistoryRegisterInput />)

    const registModeHandler = (e) => {
        const registerMode = e.target.getAttribute('value');

        if(registerMode === 'self') {
            setRegisterForm(<LunchHistoryRegisterInput items={lunchMenus} />)
        } else if (registerMode === 'find'){
            setRegisterForm(<LunchHistoryRegisterSelect items={lunchMenus} />)
        }
    }

    return (
        <div>
            <div>
                <ul>
                    <li onClick={registModeHandler} value="self">직접입력</li>
                    <li onClick={registModeHandler} value="find">찾기</li>
                </ul>
            </div>
            {registerForm}
        </div>
    )
}

export default LunchHistoryRegister;