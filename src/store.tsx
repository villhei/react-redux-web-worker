import { createStore } from 'redux'
import { initialState, rootReducer } from '~/reducers/rootReducer'
export { State } from '~/reducers/rootReducer'

const store = createStore(rootReducer, initialState)

export default store
