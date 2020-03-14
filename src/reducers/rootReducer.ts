import { Action } from '~/actions/counter'
import { INCREMENT, DECREMENT } from '~/actions/constants'

export const initialState = {
    count: 0,
}

export type State = typeof initialState

export function rootReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        default: {
            return state
        }
    }
}
