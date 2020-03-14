import React from 'react'
import { State } from '~/store'
import { connect } from 'react-redux'
import { increment, decrement } from '~/actions/counter'

type Props = {
    count: number
    increment: () => void
    decrement: () => void
}

const Counter = (props: Props) => {
    const { increment, decrement, count } = props
    return (
        <div>
            Current count is {count}
            <br></br>
            <button onClick={increment}>➕</button>
            <button onClick={decrement}>➖</button>
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = {
    increment,
    decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
