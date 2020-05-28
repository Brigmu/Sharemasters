import React, {useRef, useState, useEffect, useContext} from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav';
import { useHistory } from 'react-router-dom';
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Column/Column';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import {getAllUnrentedItems, getAllItems} from '../../utils/API/API';

const Listings = (props) => {
    const filterRef = useRef();

    useEffect(() => {
        console.log('happened')
        getAllUnrentedItems()
        .then(res => {
            console.log(res.data);
            console.log('function happened')
            setAllItems(res.data);
        })
        .catch(err => console.log(err))
        const searchTerm = localStorage.getItem('searchTerm');;
        setFilter(searchTerm);
        filterRef.current.value = searchTerm;
        localStorage.removeItem('searchTerm');
    }, [])

    const [allItems, setAllItems] = useState([])
    const [filter, setFilter] = useState();
    const [filtered, setFiltered] = useState([...allItems]);
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
                let lowercaseFilter;
                if(filter) {
                    lowercaseFilter = filter.toLowerCase();
                }
                const filterKeyword = new RegExp(lowercaseFilter);
                let filteredListings = allItems.filter(item => {
                    return filterKeyword.test(item.name.toLowerCase());
                });
                setFiltered(filteredListings);
            break;
            case 'price':
                if(!filter){
                    setFiltered(allItems);
                } else{
                filteredListings = allItems.filter(item => {
                    return parseInt(item.price) <= parseInt(filter);
                })
                setFiltered(filteredListings);
                }
            break;
            default:
                setFiltered(allItems);
        }
    }, [filter, allItems, filterType])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'Electronics'
        })
        setElectronicsItems(filteredListings)
    }, [filtered, filter])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'Events'
        })
        setEventItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'Home Improvement'
        })
        setHomeImprovementItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'Kitchen Appliances'
        })
        setKitchenItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'Miscellaneous'
        })
        setMiscItems(filteredListings)
    }, [filtered])

    useEffect(()=>{
        let filteredListings = filtered.filter(item => {
            return item.category === 'Recreation'
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

    const history = useHistory();

    const nameFilterCheck = (e) => {
        setFilterType(e.target.value);
    }

    const handlePageChangeOnItemClick = (e) => {
        console.log(e.target);
        const id = e.target.getAttribute('data-id')
        console.log(id);
        history.push(`/items/${id}`);
    }


    return (
            <div className='listings-page'>
                <Nav />
                <section className = 'section'>
                    <Columns>
                        <Column size='is-2 is-mobile'>
                            <div className='sidebar'>
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
                                
                                <input type='text' id='filter' ref={filterRef} onChange={e => setFilter(e.target.value)}></input>
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
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Electronics' colorClass='is-danger' id='electronics' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={electronicsCategoryRef}>
                            {electonicsItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : electonicsItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                        {/* <ItemCard img={item.img} itemName={item.name} id={item.id} handleItemClick={props.handleItemClick}/> */}
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Events' colorClass='is-primary' id='events' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={eventsCategoryRef}>
                                {eventItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : eventItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Home Improvement' colorClass='is-info' id='home-imp' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={homeCategoryRef}>
                                {homeImpovementItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : homeImpovementItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Kitchen Appliances' colorClass='is-danger' id='kitchen' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={kitchenCategoryRef}>
                                {kitchenItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : kitchenItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Miscellaneous' colorClass='is-primary' id='misc' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={miscCategoryRef}>
                                {miscItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : miscItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Recreation' colorClass='is-info' id='recreation' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={recreationCategoryRef}>
                                {recreationItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : recreationItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                            <Title title='Yardwork' colorClass='is-danger' id='yard' handleScrollClick={handleScrollClick}/>
                            <Columns size='carousel' reference={yardCategoryRef}>
                                {yardItems.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : yardItems.map(item => (
                                    <Column size='is-2 carousel-item'>
                                        <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                    </Column>
                                ))}
                            </Columns>
                        </Column>
                    </Columns>
                </section>
            </div>
    )
}

export default Listings;