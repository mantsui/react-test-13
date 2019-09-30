import React, { Component } from 'react';
import { DropdownSelect } from '@tableau/tableau-ui'


const strDefault = 'None selected';

const makeDefaultOption = (strInput, index) =>
    <option value="DEFAULT" disabled>{strInput}</option>

const makeOption = (item, index) => 
    <option disabled={item.disabled || item.separator} key={index} value={item.value}>{item.value}</option>;


class LineDropdown extends Component {

    render() {
        const { listData } = this.props;
        const { title } = this.props;

        return(
            <>
            <span>{title}</span>
            <br/>            
            <DropdownSelect kind='line' defaultValue={'DEFAULT'}>
                    {makeDefaultOption(strDefault)}
                    {listData.map(makeOption)}
            </DropdownSelect>
            <br/>
            </>
        )
    }
}

export default LineDropdown