import { INCREMENT, DECREMENT } from '~/actions/constants'

type IncrementAction = {
    type: typeof INCREMENT
}

type DecrementAction = {
    type: typeof DECREMENT
}

export const increment = (): IncrementAction => ({
    type: INCREMENT,
})

export const decrement = (): DecrementAction => ({
    type: DECREMENT,
})
export type Action =
    | IncrementAction
    | DecrementAction
    | {
          type: unknown
      }
