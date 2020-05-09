import React from 'react'

const CategoryDropdown = (props) => {
    return (
        <select ref={props.dropdownRef} defaultValue="default">
            <option value='default' disabled>Select category</option>
            <option value='home improvement'>home improvement</option>
            <option value='electronics'>electronics</option>
            <option value='events'>events</option>
            <option value='kitchen'>kitchen appliances</option>
            <option value='miscellaneous'>miscellaneous</option>
            <option value='recreation'>recreation</option>
            <option value='yardwork'>yardwork</option>
        </select>
    )
}

export default CategoryDropdown;