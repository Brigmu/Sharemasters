import React, {useRef, useState, useEffect, useContext} from 'react'
// import './styles.css';
import './styles.css';
import Nav from '../../components/Nav/Nav';
// import CardContainer from '../../components/CardContainer/CardContainer'
import CategoryWrapper from '../../components/CategoryWrapper/CategoryWrapper'
import ItemContext from '../../utils/ItemContext/ItemContext';
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';
import { useHistory } from 'react-router-dom';
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Column/Column';
import ItemCard from '../../components/ItemCard/ItemCard';
import Card from '../../components/Card/index';
import Title from '../../components/Title/Title';

const Listings = (props) => {
    const itemListings = useContext(ItemContext);

    const [filter, setFilter] = useState();
    const [filtered, setFiltered] = useState([...itemListings]);
    const [electonicsItems, setElectronicsItems] = useState()
    const [eventItems, setEventItems] = useState();
    const [homeImpovementItems, setHomeImprovementItems] = useState();
    const [kitchenItems, setKitchenItems] = useState();
    const [miscItems, setMiscItems] = useState();
    const [recreationItems, setRecreationItems] = useState();
    const [yardItems, setYardItems] = useState();

    useEffect(()=> {
        const filterKeyword = new RegExp(filter);
        let filteredListings = itemListings.filter(item => {
            return filterKeyword.test(item.name.toLowerCase());
        });
        setFiltered(filteredListings);
    }, [filter, itemListings])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'electronics'
        })
        setElectronicsItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'events'
        })
        setEventItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'home improvement'
        })
        setHomeImprovementItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'kitchen'
        })
        setKitchenItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'miscellaneous'
        })
        setMiscItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'recreation'
        })
        setRecreationItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'yardwork'
        })
        setYardItems(filteredListings)
    }, [filtered])

    const yardCategoryRef = useRef();
    const allCategoryRef = useRef();
    const kitchenCategoryRef = useRef();
    const homeCategoryRef = useRef();
    const electronicsCategoryRef = useRef();
    const eventsCategoryRef = useRef();
    const miscCategoryRef = useRef();
    const recreationCategoryRef = useRef();

    // const filterRef = useRef();

    const handleScrollClick = (e) => {
        console.log(e.target);
        const direction = e.target.getAttribute('data-direction');
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
            case 'Yardwork':
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
        switch(direction){
            case 'left':
                element.current.scrollBy({
                    top: 0, 
                    left: -400,
                    behavior: 'smooth'
                });
            break;
            case 'right':
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
                <section className = 'section'>
                    <Columns>
                        <Column size='is-2'>
                            <div className='content'>
                            <div class="title is-4">
                                Category List
                            </div>
                            <div className=''>
                                <li><a href='#all'>All</a></li>
                                <li><a href='#electronics'>Electronics</a></li>
                                <li><a href='#events'>Events</a></li>
                                <li><a href='#home-imp'>Home Improvement</a></li>
                                <li><a href='#kitchen'>Kitchen Appliances</a></li>
                                <li><a href='#misc'>Miscellaneous</a></li>
                                <li><a href='#recreation'>Recreation</a></li>
                                <li><a href='#yard'>Yardwork</a></li>
                            </div>
                            </div>
                        </Column>
                        <Column>
                            <Title title='All' colorClass='is-info' id='all' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={allCategoryRef}>
                                {/* <Column>
                                    <button><span class="icon is-small">
                                        <i class="fas fa-angle-left"></i>
                                    </span></button>
                                </Column> */}
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Electronics' colorClass='is-danger' id='electronics' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={electronicsCategoryRef}>
                            {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                        {/* <ItemCard img={item.img} itemName={item.name} id={item.id} handleItemClick={props.handleItemClick}/> */}
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Events' colorClass='is-primary' id='events' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={eventsCategoryRef}>
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Home Improvement' colorClass='is-info' id='home-imp' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={homeCategoryRef}>
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Kitchen Appliances' colorClass='is-danger' id='kitchen' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={kitchenCategoryRef}>
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Miscellaneous' colorClass='is-primary' id='misc' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={miscCategoryRef}>
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Recreation' colorClass='is-info' id='recreation' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={recreationCategoryRef}>
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Yardwork' colorClass='is-danger' id='yard' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={yardCategoryRef}>
                                {itemListings.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : itemListings.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                        </Column>
                    </Columns>
                </section>
                <label>Filter:</label>
                <input type='text' id='filter' onChange={e => setFilter(e.target.value)}></input>
                {/* <CategoryWrapper category='All' reference={allCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Home Improvement' reference={homeCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Electronics' reference={electronicsCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Events' reference={eventsCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Kitchen Appliances' reference={kitchenCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Miscellaneous' reference={miscCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Recreation' reference={recreationCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                <CategoryWrapper category='Yard' reference={yardCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/> */}
            </div>
        </FilteredContext.Provider>
    )
}

export default Listings;