import React from 'react';
import {Provider} from 'react-redux';
import createStore from './Store/Reducers';
import ReduxNavigation from './Navigation/ReduxNavigation';

const store = createStore;

export default class App extends React.Component {
    constructor(){
        super();
        console.log("APP OPENED");
    }
    render() {
        return (
              <Provider store={store}>
                  <ReduxNavigation/>
              </Provider>
        )
    }
}


