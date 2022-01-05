import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CounterList from './CounterList';

const App = ({
  counter,
  handleAddCounter,
  handleRemoveCounter,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <View style={styles.counterAddRemoveContainer}>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={handleAddCounter}>
            <Text style={styles.text}>AddCounter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={handleRemoveCounter}>
            <Text style={styles.text}>Remove Counter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CounterList
            counter={counter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1C1C1E',
    paddingTop: '15%',
    paddingBottom: '15%',
  },
  counterAddRemoveContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  counterAddRemoveButton: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: '#636366',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;
