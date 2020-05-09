import React, {useRef, useState, useEffect, useContext} from 'react'
// import './styles.css';
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

    const yardCategoryRef = useRef();
    const allCategoryRef = useRef();
    const kitchenCategoryRef = useRef();
    const homeCategoryRef = useRef();

    // const filterRef = useRef();

    const handleListingsBtns = (e) => {
        const id = e.target.getAttribute('id');
        const category = e.target.getAttribute('data-category');
        console.log(category);
        let element;
        switch(category){
            case 'All':
                element = allCategoryRef;
            break;
            case 'Yard':
                element = yardCategoryRef;
            break;
            case 'Kitchen':
                element = kitchenCategoryRef;
            break;
            case 'Home Improvement':
                element = homeCategoryRef;
            break;
            default:
                element = allCategoryRef;
        }
        switch(id){
            case 'scroll-left-btn':
                element.current.scrollBy({
                    top: 0, 
                    left: -400,
                    behavior: 'smooth'
                });
            break;
            case 'scroll-right-btn':
                element.current.scrollBy({
                    top: 0, 
                    left: 400,
                    behavior: 'smooth'
                });
            break;
            default:
                console.log('nothing happened');
        };
    };

    const handleSwipe = (e) => {
        console.log(e);
        let type = e.type
        console.log(type);
        if(type === 'touchmove'){
            console.log(e.nativeEvent);
            // console.log(e.screenX);
            // console.log(e.screenY);
        }
    }

    return (
        <FilteredContext.Provider value={filtered}>
            <div className='listings-page'>
                <Nav />
                <label>Filter:</label>
                <input type='text' id='filter' onChange={e => setFilter(e.target.value)}></input>
                
                {/* <CategoryWrapper category='All' reference={allCategoryRef} handleBtns={handleListingsBtns} handleSwipe={e => handleSwipe(e)}/> */}

                <CategoryWrapper category='Yard' reference={yardCategoryRef} handleBtns={handleListingsBtns} handleSwipe={e => handleSwipe(e)}/>
                <CategoryWrapper category='Kitchen' reference={kitchenCategoryRef} handleBtns={handleListingsBtns} handleSwipe={e => handleSwipe(e)}/>
                <CategoryWrapper category='Home Improvement' reference={homeCategoryRef} handleBtns={handleListingsBtns} handleSwipe={e => handleSwipe(e)}/>
            </div>
        </FilteredContext.Provider>
    )
}

export default Listings;