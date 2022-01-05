import React from 'react';
import {StyleSheet} from 'react-native';
import CounterListContainer from './containers/CounterListContainer';

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
