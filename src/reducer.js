import {
  PAGE_WILL_PRINT,
  PAGE_DID_PRINT,
} from './constants'

const initialState = {
  isProcessing: false,
}

export default (state = initialState, action = {}) => {
  if (action.type === PAGE_WILL_PRINT) {
    return { ...state, isProcessing: true }
  } else if (action.type === PAGE_DID_PRINT) {
    return { ...state, isProcessing: false }
  } else {
    return state
  }
}
