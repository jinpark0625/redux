import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({index, value, handleIncrement, handleDecrement}) => {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterInfo}>Count : {value.counterNum}</Text>
      <View style={styles.counterBtnContainer}>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => handleIncrement(index)}>
          <Text style={styles.text}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => handleDecrement(index)}>
          <Text style={styles.text}>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: '#A7A7A7',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    borderRadius: 4,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 10,
  },
  counterInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  counterBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#636366',
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
  },
});

export default Counter;
