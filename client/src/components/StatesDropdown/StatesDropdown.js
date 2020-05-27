import React from 'react';
import { Dropdown } from "react-bulma-components";

const StatesDropdown = (props) => {

    const stateCodes = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    return(
        <div className="select">
            <select ref={props.stateRef}>
                <option value='default' disabled>Select State</option>
                { stateCodes.map(state => {
                    return <option key={ state } value={ state } selected={ state === props.defaultState ? true : false}> { state } </option>
                }) }
            </select>
        </div>
    )
}


export default StatesDropdown;