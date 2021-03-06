import { Action } from '~/actions'
import { INCREMENT, DECREMENT, SET_COUNT } from '~/actions/constants'

export const initialState = {
    count: 0,
    doubleCount: 0,
}

export type State = typeof initialState

export function rootReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1,
                doubleCount: state.doubleCount + 2,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1,
                doubleCount: state.doubleCount - 2,
            }
        }
        case SET_COUNT: {
            return {
                ...state,
                count: action.payload,
                doubleCount: action.payload,
            }
        }
        default: {
            return state
        }
    }
}
