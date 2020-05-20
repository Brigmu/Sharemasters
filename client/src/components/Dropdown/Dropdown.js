import React, {useState} from 'react'
import './styles.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Dropdown} from 'react-bulma-components';

const DropdownMenu = (props) => {
    const [selected, setSelected] = useState('');
    const handleDropdownChange = (e) => {
        setSelected(e);
        if(props.extraFunction){
            props.extraFunction(e);
        }
    }
    return(
        <Dropdown label={props.label} onChange={handleDropdownChange} value={selected}>
            {props.items.map(item => (
                <Dropdown.Item value={item}>
                    {item}
                </Dropdown.Item>
            ))}
            {/* <Dropdown.Item value="item" >
                Dropdown item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item value='item2' >
                Item 2
            </Dropdown.Item> */}
        </Dropdown>
        
    )
}

export default DropdownMenu;