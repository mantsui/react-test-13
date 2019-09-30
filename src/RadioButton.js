import React, { Component } from 'react';
import { Radio } from '@tableau/tableau-ui'


class RadioButton extends Component {
    state = { checkedValue: 'one' };
    onChange = (e) => this.setState({checkedValue: e.target.value});

    render () {
        const { radioData } = this.props;
        const { radioTitle } = this.props;

        return(
            <>
            <span>{radioTitle}</span>
            <br/>
            {radioData.map( (radioOption, i) =>
                <React.Fragment key={i}>
                <Radio 
                    checked={this.state.checkedValue === radioOption} 
                    onChange={this.onChange} 
                    name='ordinal' 
                    value={radioOption}>
                    {radioOption}
                </Radio>
                <br/>
                </React.Fragment> 
            )}
            </>
        )
    }
}

export default RadioButton

/*
class RadioButton extends Component {
    state = { checkedValue: 'one' };
    onChange = (e) => this.setState({checkedValue: e.target.value});

    render () {
        return(
            <>
            <Radio checked={this.state.checkedValue === 'one'} onChange={this.onChange} name='ordinal' value='one'>One</Radio><br/>
            <Radio checked={this.state.checkedValue === 'two'} onChange={this.onChange} name='ordinal' value='two'>Two</Radio><br/>
            <Radio checked={this.state.checkedValue === 'three'} onChange={this.onChange} name='ordinal' value='three'>Three</Radio><br/>
            </>
        )
    }
}
*/
