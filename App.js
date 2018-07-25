import React from 'react';
import Row from './Row.js';
import ContactsList from './ContactsList.js';
import AddContactForm from './AddContactForm.js';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';


import contacts, { compareNames } from './contacts'
export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  render() {
    if (this.state.showForm) return <AddContactForm/>

    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="add contact" onPress={this.toggleForm} />
        { this.state.showContacts && <ContactsList
          contacts={this.state.contacts}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    }
});
