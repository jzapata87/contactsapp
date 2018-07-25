import React from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types'

export default class  extends React.Component {
  static propTypes = {
    addContact: PropTypes.func
  }

  state = {
     name: '',
     phone: '',
  }

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    this.setState({phone})
  }

  render() {
    return (

      <View style={{paddingTop: 20}}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          keyboardType='numeric'
        />
        <Button title='add contact'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,

  }
});
