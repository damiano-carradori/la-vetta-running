import React, {PureComponent} from 'react'
import {FormContext} from '../FormContext'
import {Wrapper} from './style'
import './style.css'

class Input extends PureComponent {
    render() {
        const {label} = this.props;
        const {onChange} = this.context;
        return (
            <Wrapper>
                <input {...this.props} onChange={onChange}/>
                {label && <label>{label}</label>}
            </Wrapper>
        );
    }
}

Input.contextType = FormContext;

export default Input