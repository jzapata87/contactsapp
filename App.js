import React from 'react';
import Row from './Row.js';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';


import contacts from './contacts'

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <ScrollView>
            { contacts.map(contact => (
              <Row {...contact}/>

          ))}
        </ScrollView>
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
