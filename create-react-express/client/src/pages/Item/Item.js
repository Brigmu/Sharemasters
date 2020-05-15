import React from 'react';
// import { useParams } from 'react-router-dom';
// import API from '../../utils/API';
import ItemUpperDiv from '../../components/InfoUpperDiv/InfoUpperDiv';
import Nav from "../../components/Nav/Nav";
import './styles.css';


function ItemPage() {
    
    return (
        <div>
            {/* inserted nav bar component */}
            <Nav />
            <ItemUpperDiv>

            </ItemUpperDiv>
        </div>

        // ryan original code:
        // <ItemUpperDiv>

        // </ItemUpperDiv>
        // <ItemLowerDiv>

        // </ItemLowerDiv>
    )
}

export default ItemPage