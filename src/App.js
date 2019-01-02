import React, {Component} from 'react'
import './App.css'
import Form from './components/Form';

class App extends Component {

    render() {
        return (
            <Form onSubmit={console.log}>
                <Form.Input name="first_name" placeholder="First name" type="text"/>
                <Form.Input name="last_name" placeholder="Last name" type="text"/>

                {/*Gender*/}
                <Form.Input name="gender" type="radio" value="M" label="Male"/>
                <Form.Input name="gender" type="radio" value="F" label="Female"/>

                <Form.Input name="data" placeholder="Data" type="date"/>
                <Form.Input name="nome_gara" placeholder="Nome Gara" type="text"/>
                <Form.Input className="km" name="distanza" placeholder="Distanza percorsa" type="number"/>
                <Form.Input className="m" name="dislivello" placeholder="Dislivello" type="number"/>

                <Form.Button type="submit">SEND</Form.Button>
            </Form>
        );
    }
}

export default App