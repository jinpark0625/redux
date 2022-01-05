import React from 'react';
import Counter from './Counter';
import {StyleSheet, View} from 'react-native';

const CounterList = ({
  counter,
  handleAddCounter,
  handleRemoveCounter,
  handleIncrement,
  handleDecrement,
}) => {
  const counterModule = counter.map((item, index) => (
    <Counter
      key={index}
      index={index}
      value={item}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  ));

  return <View style={styles.counterFrame}>{counterModule}</View>;
};

const styles = StyleSheet.create({
  counterFrame: {
    padding: 10,
  },
});

export default CounterList;
