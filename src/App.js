import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import allReducer from './reducers/indexReducer';
import MovieContainer from './containers/movieContainers';

import rootSaga from './sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducer, applyMiddleware(sagaMiddleware));
export default class App extends Component{
    render(){
        return(
            <Provider store = {store}>
                <MovieContainer/>
            </Provider> 
        )
    }
}
sagaMiddleware.run(rootSaga);