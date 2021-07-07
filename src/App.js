import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactsForm from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        { name: "Caleb", phonenumber: "0291021912", location: "Tema" },
        { name: "Jerry", phonenumber: "0291021912", location: "Kumasi" },
        { name: "Andy", phonenumber: "0291021912", location: " Teshi" },
      ]
    }
  }

  handleAddContact = (newContact) => {
    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
  }

  render() {
    const contacts = this.state.contacts.map((contact, index) => {
      return (
        <Contacts contact={contact} key={index} />
      )
    })
    return (
      <div  className="completeContact" >
        <ContactsForm addContact={this.handleAddContact} />
        {contacts}

      </div>
    );
  }
}

export default App;