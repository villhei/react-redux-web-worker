import { createStore } from 'redux'
import { initialState, rootReducer } from '~/reducers/rootReducer'
import { Action } from './actions'
import { State } from '~/reducers/rootReducer'

const store = createStore(rootReducer, initialState)

export type ActionMessage = {
    type: 'ACTION'
    payload: Action
}

function isActionMessage(obj: any): obj is ActionMessage {
    return obj && obj.type === 'ACTION'
}

export type StateUpdateMessage = {
    type: 'STATE_UPDATE'
    payload: State
}
onmessage = function(event: MessageEvent) {
    if (isActionMessage(event.data)) {
        store.dispatch(event.data.payload)
    }
}

store.subscribe(() => {
    postMessage(
        {
            type: 'STATE_UPDATE',
            payload: store.getState(),
        },
        undefined as any,
    )
})
