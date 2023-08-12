import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksCarContainer from './components/HooksCarContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
      <HooksCarContainer />
      </div>
    </Provider>
  )
}

export default App
