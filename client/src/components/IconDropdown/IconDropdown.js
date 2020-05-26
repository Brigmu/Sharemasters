import React from 'react';
import { Dropdown } from "react-bulma-components";
import butterfly from "../../images/icons/butterfly.png";
import dog from "../../images/icons/dog.png";
import falcon from "../../images/icons/falcon.png";
import iguana from "../../images/icons/iguana.png";
import octopus from "../../images/icons/octopus.png";
import owl from "../../images/icons/owl.png";

const IconDropdown = (props) => {

    const icons = [butterfly, dog, falcon, iguana, octopus, owl];
    
    return(
        <div className="select">
            <select ref={props.iconRef} defaultValue="default">
                <option value='default' disabled>Select Profile Icon</option>
                { icons.map(i => {
                    return (
                        <option key={ i } value={ i }>
                            <figure class="image is-32x32">
                                <img src={ i } />
                            </figure>
                        </option>
                    )
                }) }
            </select>
        </div>
    )
}


export default IconDropdown;