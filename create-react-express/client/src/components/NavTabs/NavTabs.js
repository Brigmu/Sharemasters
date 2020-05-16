import React from 'react'

const NavTabs = (props) => {
    return(
        <div className = "tabs is-medium">
            <ul>
                {props.tabs.map(tab => (
                    <li key={tab} data-page={tab} onClick={props.handlePageChange}><a data-page={tab}>{tab}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default NavTabs;