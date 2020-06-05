import React, {useRef, useState, useEffect, useContext} from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav';
import { useHistory } from 'react-router-dom';
// import Columns from '../../components/Columns/Columns';
import Column from '../../components/Column/Column';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import { Container, Columns } from "react-bulma-components";
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

    const categories = [
        {
            id: "all",
            title: "All",
            ref: allCategoryRef,
            items: filtered,
            color: "is-info"
        },
        {
            id: "electronics",
            title: "Electronics",
            ref: electronicsCategoryRef,
            items: electonicsItems,
            color: "is-warning"
        },
        {
            id: "events",
            title: "Events",
            ref: eventsCategoryRef,
            items: eventItems,
            color: "is-danger"
        },
        {
            id: "home-imp",
            title: "Home Improvement",
            ref: homeCategoryRef,
            items:homeImpovementItems,
            color: "is-link"
        },
        {
            id: "kitchen",
            title: "Kitchen",
            ref: kitchenCategoryRef,
            items: kitchenItems,
            color: "is-warning"

        },
        {
            id: "recreation",
            title: "Recreation",
            ref: recreationCategoryRef,
            items: recreationItems,
            color: "is-danger"
        },
        {
            id: "yard",
            title: "Yard",
            ref: yardCategoryRef,
            items: yardItems,
            color: "is-success"
        },
        {
            id: "misc",
            title: "Miscellaneous",
            ref: miscCategoryRef,
            items: miscItems,
            color: "is-light"
        }
    ];

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
                        <Columns.Column size={3}>
                            <div className="mobilebar">
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
                                
                                <input className="input" type='text' id='filter' ref={filterRef} onChange={e => setFilter(e.target.value)}></input>
                                <hr></hr>
                            </div>
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
                                
                                <input className="input" type='text' id='filter' ref={filterRef} onChange={e => setFilter(e.target.value)}></input>
                                <hr></hr>
                            <div className="title is-4">
                                Category List
                            </div>
                            <div>
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
                        </Columns.Column>
                        <Columns.Column size={9}>
                            <Container>
                                {categories.map(category => {
                                    return (
                                        <div className="item-section" key={category.title}>
                                            <div id={category.id} className={`notification ${category.color}`}><h1 className="title is-3">{category.title}</h1></div>
                                            <Columns className="is-mobile">
                                                <Columns.Column size={1}>
                                                <button className="button scroll" data-direction='left' data-category={category.title} onClick={handleScrollClick}>
                                                    <span className="icon is-small" data-direction='left' data-category={category.title}>
                                                        <i className="fas fa-angle-left" data-direction='left' data-category={category.title}></i>
                                                    </span>
                                                </button>
                                                </Columns.Column>
                                                <Columns.Column size={10}>
                                                    <div className="item-section">
                                                        <div className='is-tablet carousel' ref={category.ref}>
                                                            {category.items.length < 1 ? <h1 className='nomatch'>No Matches Found</h1> : category.items.map(item => (
                                                                <div className="carousel-item">
                                                                    <Card handleItemClick={handlePageChangeOnItemClick} itemId={item._id} price={item.price} img={item.img} itemName={item.name} id={item._id}></Card>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    
                                                </Columns.Column>
                                                <Columns.Column size={1}>
                                                <button className="button scroll" data-direction='right' data-category={category.title} onClick={handleScrollClick}>
                                                    <span className="icon is-small" data-direction='right' data-category={category.title}>
                                                        <i className="fas fa-angle-right" data-direction='right' data-category={category.title}></i>
                                                    </span>
                                                </button>
                                                </Columns.Column>
                                            </Columns>
                                        </div>
                                    );
                                    })
                                }
                           </Container>
                        </Columns.Column>
                    </Columns>
                </section>
            </div>
    )
}

export default Listings;