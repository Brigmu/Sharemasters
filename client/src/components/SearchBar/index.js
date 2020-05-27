import React, { useState } from "react";
import { Container } from "react-bulma-components";
import "./styles.css";

function SearchBar(props) {
    // const [state, setState] = useState();
    return (
        <Container>
            <form className="tile field has-addons">
                <div className="control is-expanded">
                    <input 
                        className="input"
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="term"
                        type="text"
                        placeholder="What are you looking for?"
                        id="term"
                        ref={props.reference}
                    />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={props.handleSearch}>
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