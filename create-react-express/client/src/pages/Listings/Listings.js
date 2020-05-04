import React, {useRef, useState, useEffect, useContext} from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav'
// import CardContainer from '../../components/CardContainer/CardContainer'
import CategoryWrapper from '../../components/CategoryWrapper/CategoryWrapper'
import ItemContext from '../../utils/ItemContext/ItemContext';
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';

const Listings = (props) => {
    const itemListings = useContext(ItemContext);

    const [filter, setFilter] = useState();
    const [filtered, setFiltered] = useState([...itemListings]);

    useEffect(()=> {
        const filterKeyword = new RegExp(filter);
        let filteredListings = itemListings.filter(item => {
            return filterKeyword.test(item.name.toLowerCase());
        });
        setFiltered(filteredListings);
    }, [filter, itemListings])
    const yardCatRef = useRef();
    // const filterRef = useRef();

    const handleListingsBtns = (e) => {
        const id = e.target.getAttribute('id');
        console.log(id);
        console.log(yardCatRef.current);
        switch(id){
            case 'scroll-left-btn':
                yardCatRef.current.scrollBy({
                    top: 0, 
                    left: -400,
                    behavior: 'smooth'
                });
            break;
            case 'scroll-right-btn':
                yardCatRef.current.scrollBy({
                    top: 0, 
                    left: 400,
                    behavior: 'smooth'
                });
            break;
            default:
                console.log('nothing happened');
        }
    }
    return (
        <FilteredContext.Provider value={filtered}>
            <div className='listings-page'>
                <Nav />
                <label>Filter:</label>
                <input type='text' id='filter' onChange={e => setFilter(e.target.value)}></input>
                <CategoryWrapper category='Yard' yardRef={yardCatRef} handleBtns={handleListingsBtns} />
            </div>
        </FilteredContext.Provider>
    )
}

export default Listings;