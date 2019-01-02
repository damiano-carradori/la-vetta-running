import React, {PureComponent} from 'react'
import {FormContext, FormContextProvider} from './FormContext'
import Input from './Input'
import Button from './Button'
import './style.css'

class Form extends PureComponent {
    render() {
        const {children, onSubmit} = this.props;
        return (
            <FormContextProvider onSubmit={onSubmit}>
                <FormContext.Consumer>
                    {({onSubmit: contextSubmit}) => (
                        <form onSubmit={contextSubmit}>
                            {children}
                        </form>
                    )}
                </FormContext.Consumer>
            </FormContextProvider>
        )
    }
}

Form.Input = Input;
Form.Button = Button;


export default Form