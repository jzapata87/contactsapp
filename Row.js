import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';


const Row = (props) => (
  <View>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

export default Row
