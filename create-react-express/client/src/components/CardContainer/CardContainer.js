import React, { useContext } from 'react'
import './styles.css';
// import ItemContext from '../../utils/ItemContext/ItemContext';
import ItemCard from '../ItemCard/ItemCard';
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';

const CardContainer = (props) => {
    const itemListings = useContext(FilteredContext);
    console.log(itemListings);
    // const handleMouseDown = (e) => {
    //     console.log('mousedown');
    // }
    const handleMouseDown = (e) => {
        console.log(e);
    }

    return (
        <div className = 'card-container' ref={props.reference} onMouseDown={handleMouseDown} onTouchEnd={props.handleSwipe} onTouchMove={props.handleSwipe}>
            
            {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                <ItemCard img={item.img} itemName={item.name} id={item.id}/>
            ))}
            
        </div>
    )
}

export default CardContainer;