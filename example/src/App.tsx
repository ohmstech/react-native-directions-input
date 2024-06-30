import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  type GooglePlace,
  DirectionsInput,
} from 'react-native-directions-input';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Directions Input Test</Text>
      <DirectionsInput
        apiKey="YOUR_API_KEY" // use env
        onOriginChange={(place: GooglePlace) => {
          console.log('Origin:', place);
        }}
        onDestinationChange={(place: GooglePlace) => {
          console.log('Destination:', place);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
    backgroundColor: '#0f0',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});
