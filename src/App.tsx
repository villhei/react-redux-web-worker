import React from 'react'

import { Provider } from 'react-redux'
import store from './store'
import Counter from './containers/Counter'

const App = () => {
    return (
        <Provider store={store}>
            <h1>Hello</h1>
            <Counter />
        </Provider>
    )
}

export default App
