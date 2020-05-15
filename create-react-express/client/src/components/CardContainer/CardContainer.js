import React, { useContext } from 'react'
// import './styles.css';
// import ItemContext from '../../utils/ItemContext/ItemContext';

// import ItemCard from '../ItemCard/ItemCard';
import Card from '../Card/index';
import ColumnContainer from "../ColumnContainer";
import Column from "../Column";
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';
import Container from '../Container';

const CardContainer = (props) => {
    const itemListings = useContext(FilteredContext);
    // console.log(itemListings);
    // const handleMouseDown = (e) => {
    //     console.log('mousedown');
    // }
    const handleMouseDown = (e) => {
        console.log(e);
    }

    return (
        // original brigham code 
        // <div className = 'card-container' ref={props.reference} onMouseDown={handleMouseDown} onTouchEnd={props.handleSwipe} onTouchMove={props.handleSwipe}>
            
        //     {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
        //         <ItemCard img={item.img} itemName={item.name} id={item.id}/>
        //     ))}
            
        // </div>

        // bulma css edit - cna 
        <Container>
            <ColumnContainer>
            {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                <Column>
                    <Card img={item.img} itemName={item.name} id={item.id} handleItemClick={props.handleItemClick}/>
                </Column>
            ))}
            </ColumnContainer>
        </Container>
    )
}

export default CardContainer;