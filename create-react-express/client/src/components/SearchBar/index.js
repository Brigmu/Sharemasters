import React from "react";
import Container from "../Container";

function SearchBar(props) {
    return (
        <Container>
            <section className="section">
                <form className="tile field is-grouped">
                    <div className="control is-expanded">
                        <input 
                            className="input is-rounded"
                            value={props.search}
                            onChange={props.handleInputChange}
                            name="term"
                            type="text"
                            placeholder="What are you looking for?"
                            id="term"
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={props.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </section>
        </Container>
    );
}

export default SearchBar;