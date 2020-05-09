import React, {useRef, useState, useEffect, useContext} from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav';
// import CardContainer from '../../components/CardContainer/CardContainer'
import CategoryWrapper from '../../components/CategoryWrapper/CategoryWrapper'
import ItemContext from '../../utils/ItemContext/ItemContext';
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';
import { useHistory } from 'react-router-dom';

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
    const electronicsCategoryRef = useRef();
    const eventsCategoryRef = useRef();
    const miscCategoryRef = useRef();
    const recreationCategoryRef = useRef();

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
            case 'Electronics':
                element = electronicsCategoryRef;
            break;
            case 'Events':
                element = eventsCategoryRef;
            break;
            case 'Yard':
                element = yardCategoryRef;
            break;
            case 'Kitchen Appliances':
                element = kitchenCategoryRef;
            break;
            case 'Home Improvement':
                element = homeCategoryRef;
            break;
            case 'Miscellaneous':
                element = miscCategoryRef;
            break;
            case 'Recreation':
                element = recreationCategoryRef;
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

    const history = useHistory();

    const handleItemClick = (e) => {
        const id = e.target.id;
        console.log('clicked');
        // <Redirect to='/newlisting' />
        history.push('/newlisting');
    }

    return (
        <FilteredContext.Provider value={filtered}>
            <div className='listings-page'>
                <Nav />
                <label>Filter:</label>
                <input type='text' id='filter' onChange={e => setFilter(e.target.value)}></input>
                <CategoryWrapper category='All' reference={allCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Home Improvement' reference={homeCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Electronics' reference={electronicsCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Events' reference={eventsCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Kitchen Appliances' reference={kitchenCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Miscellaneous' reference={miscCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Recreation' reference={recreationCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Yard' reference={yardCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
            </div>
        </FilteredContext.Provider>
    )
}

export default Listings;