import { IncrementAction, DecrementAction, SetCountAction } from './counter'

export type Action = IncrementAction | DecrementAction | SetCountAction | never
