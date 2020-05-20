import React, {useRef, useState, useEffect, useContext} from 'react'
// import './styles.css';
import Nav from '../../components/Nav/Nav';
import CategoryWrapper from '../../components/CategoryWrapper/CategoryWrapper'
import ItemContext from '../../utils/ItemContext/ItemContext';
import FilteredContext from '../../utils/API/FilteredContext/FilteredContext';
import { useHistory } from 'react-router-dom';
// import Section from "../../components/Section";
// import ColumnContainer from '../../components/ColumnContainer';
// import Column from '../../components/Column';
// import categories from "../../utils/categories.json";
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Column/Column';
import ItemCard from '../../components/ItemCard/ItemCard';
import Card from '../../components/Card/index';
import Title from '../../components/Title/Title';

const Listings = (props) => {
    const itemListings = useContext(ItemContext);

    const [filter, setFilter] = useState();
    const [filtered, setFiltered] = useState([...itemListings]);
    const [electonicsItems, setElectronicsItems] = useState([])
    const [eventItems, setEventItems] = useState([]);
    const [homeImpovementItems, setHomeImprovementItems] = useState([]);
    const [kitchenItems, setKitchenItems] = useState([]);
    const [miscItems, setMiscItems] = useState([]);
    const [recreationItems, setRecreationItems] = useState([]);
    const [yardItems, setYardItems] = useState([]);
    const [filterType, setFilterType] = useState('name');

    useEffect(()=> {
        switch(filterType){
            case 'name':
                const filterKeyword = new RegExp(filter);
                let filteredListings = itemListings.filter(item => {
                    return filterKeyword.test(item.name.toLowerCase());
                });
                setFiltered(filteredListings);
            break;
            case 'price':
                if(!filter){
                    setFiltered(itemListings);
                } else{
                filteredListings = itemListings.filter(item => {
                    return parseInt(item.price) <= parseInt(filter);
                })
                setFiltered(filteredListings);
                }
            break;
            default:
                setFiltered(itemListings);
        }
    }, [filter, itemListings, filterType])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'electronics'
        })
        setElectronicsItems(filteredListings)
    }, [filtered, filter])

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
            return item.category === 'Yardwork'
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

    const nameFilterCheck = (e) => {
        setFilterType(e.target.value);
    }


    return (
        <FilteredContext.Provider value={filtered}>
            <div className='listings-page'>
                {/* <Nav />
                <label>Filter:</label>
                <input type='text' id='filter' onChange={e => setFilter(e.target.value)}></input>
                <Section>
                    <ColumnContainer>
                        <Column
                            size = "is-2"
                        >
                            <div class="title is-4">
                                Category List               
                            </div>
                            <div class="content">
                                <ul>
                                    <li><a>Electronics</a></li>
                                    <li><a>Events</a></li>
                                    <li><a>Home Improvement</a></li>
                                    <li><a>Kitchen Appliances</a></li>
                                    <li><a>Recreation</a></li>
                                    <li><a>Miscellaneous</a></li>
                                </ul>
                            </div>
                        </Column>
                        <Column
                            size=""
                        >
                            <CategoryWrapper category='All' color ="primary is-light" reference={allCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>    
                            {categories.map(item => 
                                <CategoryWrapper category={item.category} color={item.color} reference={props.ref + "CategoryRef"} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        )}
                        </Column>
                        {/* <CategoryWrapper category='Home Improvement' color ="info" reference={homeCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        <CategoryWrapper category='Electronics' color ="warning" reference={electronicsCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        <CategoryWrapper category='Events' color ="primary" reference={eventsCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        <CategoryWrapper category='Kitchen Appliances' color ="danger" reference={kitchenCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        <CategoryWrapper category='Recreation' reference={recreationCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        <CategoryWrapper category='Yard' color="success" reference={yardCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/>
                        <CategoryWrapper category='Miscellaneous' color ="black" reference={miscCategoryRef} handleBtns={handleListingsBtns} handleItemClick={handleItemClick}/> */}
                    {/* </ColumnContainer> */}
                {/* </Section> */}
                <Nav>
                </Nav>
                <section className = 'section'>
                    <Columns>
                        <Column size='is-2'>
                            <div className='content'>
                                <p>Select filter type</p>
                                {filterType === 'price' ?
                                <ul id='filters'>
                                     
                                    <li>
                                    <input type='radio' id='nameFilter' value='name' name='filter'onChange={nameFilterCheck}></input>
                                    <label htmlFor='nameFilter'>Name</label>
                                    </li>
                                    <li>
                                    <input type='radio' id='priceFilter' value='price' name='filter' onChange={nameFilterCheck} checked></input>
                                    <label htmlFor='priceFilter'>Price</label>
                                    </li>
                                </ul>
                                     :
                                <ul id='filters'>
                                    <li>
                                        <input type='radio' id='nameFilter' value='name' name='filter' checked onChange={nameFilterCheck}></input>
                                        <label htmlFor='nameFilter'>Name</label>
                                    </li>
                                    <li>
                                        <input type='radio' id='priceFilter' value='price' name='filter' onChange={nameFilterCheck}></input>
                                        <label htmlFor='priceFilter'>Price</label>
                                    </li>
                                </ul>}
                                
                                {/* <label>Filter:</label> */}
                                
                                <input type='text' id='filter' onChange={e => setFilter(e.target.value)}></input>
                                <hr></hr>
                            <div className="title is-4">
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
                                {filtered.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : filtered.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Electronics' colorClass='is-danger' id='electronics' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={electronicsCategoryRef}>
                            {electonicsItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : electonicsItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                        {/* <ItemCard img={item.img} itemName={item.name} id={item.id} handleItemClick={props.handleItemClick}/> */}
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Events' colorClass='is-primary' id='events' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={eventsCategoryRef}>
                                {eventItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : eventItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Home Improvement' colorClass='is-info' id='home-imp' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={homeCategoryRef}>
                                {homeImpovementItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : homeImpovementItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Kitchen Appliances' colorClass='is-danger' id='kitchen' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={kitchenCategoryRef}>
                                {kitchenItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : kitchenItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Miscellaneous' colorClass='is-primary' id='misc' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={miscCategoryRef}>
                                {miscItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : miscItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Recreation' colorClass='is-info' id='recreation' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={recreationCategoryRef}>
                                {recreationItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : recreationItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Yardwork' colorClass='is-danger' id='yard' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={yardCategoryRef}>
                                {yardItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : yardItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card price={item.price} img={item.img} itemName={item.name} id={item.id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                        </Column>
                    </Columns>
                </section>
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