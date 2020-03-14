import { Action } from './actions'
import { State, initialState } from './reducers/rootReducer'
export { State } from '~/reducers/rootReducer'
import { createStore } from 'redux'

type SetStateAction = {
    type: '~/SET_STATE'
    payload: State
}

function setState(payload: State): SetStateAction {
    return {
        type: '~/SET_STATE',
        payload,
    }
}
const stateReducer = (state = initialState, action: Action | SetStateAction): State => {
    if (action.type === '~/SET_STATE') {
        return action.payload
    }
    return state
}

const store = createStore(stateReducer, initialState)

const worker = new Worker('../src/store.worker.ts')

// Preserve the original dispatcher
const originalDispatch = store.dispatch

// Post all actions directly to the worker
const workerDispatcher: any = (payload: Action) => {
    worker.postMessage({
        type: 'ACTION',
        payload,
    })
    return payload
}

store.dispatch = workerDispatcher

worker.addEventListener('error', function(event) {
    console.error('Error in the worker', event)
})

// Subscribe to worker state updates and override the state with one provided by the worker
worker.onmessage = (event: MessageEvent) => {
    if (event.data.type === 'STATE_UPDATE') {
        originalDispatch(setState(event.data.payload))
    }
}

export default store
