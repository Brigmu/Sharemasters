import React, { useState } from 'react';
import { Columns } from "react-bulma-components";
import images from "../../images";
import "./styles.css";

const IconSelect = (props) => {
    const [selected, setSelected] = useState(); 

    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return(
        <div className="control">
            <div ref={props.iconRef} value={selected}></div>
            <Columns>
                { images.map(({id, src}) => {
                    return (
                        <Columns.Column key={ id } className="is-narrow">
                            <label className="radio">
                                <input type="radio" name="icon" value={ src } onChange={ handleChange }/>
                                <img src={ src }/>
                            </label>
                        </Columns.Column>
                    )
                }) }
            </Columns>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default IconSelect;