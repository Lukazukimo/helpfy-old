import MenuNavigator from './src/Navigator';
import Teste from './src/screens/Teste'

// import React from 'react'
// import { Provider } from 'react-redux'
// import App from './src/App'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import storeConfig from './src/store/storeConfig'
// import axios from 'axios'

// axios.defaults.baseURL = 'https://helpfy-18cd6.firebaseio.com/'

// const store = storeConfig()
// const Redux = () => (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )

// AppRegistry.registerComponent(appName, () => Redux);
AppRegistry.registerComponent(appName, () => MenuNavigator);
