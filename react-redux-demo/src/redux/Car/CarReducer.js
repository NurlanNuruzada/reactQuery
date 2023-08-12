import { BUY_CARS } from './CarTypes'

const initialState = {
  numbeOfcars: 20
}

const CarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CARS: return {
      ...state,
      numbeOfcars: state.numbeOfcars - 1
    }

    default: return state
  }
}

export default CarsReducer
