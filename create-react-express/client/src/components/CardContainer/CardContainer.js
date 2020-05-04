import React, { useContext } from 'react'
import './styles.css';
// import ItemContext from '../../utils/ItemContext/ItemContext';
import ItemCard from '../ItemCard/ItemCard';
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';

const CardContainer = (props) => {
    const itemListings = useContext(FilteredContext);

    const handleSwipe= (e) => {
        // console.log(e);
        // console.log(e.type);
        // console.log(e.screenX);
        // console.log(e.screenY);
    }

    return (
        <div className = 'card-container' ref={props.yardRef}onMouseDown={handleSwipe} onMouseUp={handleSwipe}>
            
            {itemListings.map(item => (
                <ItemCard img={item.img} itemName={item.name} id={item.id}/>
            ))}
            
        </div>
    )
}

export default CardContainer;