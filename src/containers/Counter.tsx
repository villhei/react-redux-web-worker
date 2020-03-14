import React from 'react'
import { State } from '~/store'
import { connect } from 'react-redux'
import { increment, decrement, setCount } from '~/actions/counter'

type Props = {
    count: number
    increment: () => void
    decrement: () => void
    setCount: (value: number) => void
}

const Counter = (props: Props) => {
    const { increment, decrement, setCount, count } = props
    return (
        <div>
            Current count is {count}
            <br></br>
            <button onClick={increment}>➕</button>
            <button onClick={decrement}>➖</button>
            <button onClick={() => setCount(0)}>❌</button>
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
    setCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
