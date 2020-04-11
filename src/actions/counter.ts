import { INCREMENT, DECREMENT, SET_COUNT } from '~/actions/constants'

export type IncrementAction = {
    type: typeof INCREMENT
}

export type DecrementAction = {
    type: typeof DECREMENT
}

export type SetCountAction = {
    type: typeof SET_COUNT
    payload: number
}

export const increment = (): IncrementAction => ({
    type: INCREMENT,
})

export const decrement = (): DecrementAction => ({
    type: DECREMENT,
})

export const setCount = (payload: number) => ({
    type: SET_COUNT,
    payload,
})
