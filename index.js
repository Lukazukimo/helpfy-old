import React from 'react'
// import App from './src/App'
import MenuNavigator from './src/Navigator';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'
// import axios from 'axios'

// axios.defaults.baseURL = 'https://helpfy-18cd6.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <MenuNavigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
// AppRegistry.registerComponent(appName, () => MenuNavigator);
