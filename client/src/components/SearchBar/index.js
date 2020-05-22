import React, { useState } from "react";
import { Container } from "react-bulma-components";

function SearchBar(props) {
    const [state, setState] = useState();
    return (
        <Container>
            <form className="field has-addons">
                <div className="control is-expanded">
                    <input 
                        className="input"
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="term"
                        type="text"
                        placeholder="What are you looking for?"
                        id="term"
                    />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={props.handleFormSubmit}>
                        <span className="icon">
                            <i className="fas fa-search"></i>
                        </span>
                    </button>
                </div>
            </form>
        </Container>
    );
}

export default SearchBar;