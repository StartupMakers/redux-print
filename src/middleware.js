import {
  PRINT_PAGE,
  PAGE_WILL_PRINT,
  PAGE_DID_PRINT,
} from './constants'

export default ({ dispatch }) => next => action => {
  if (action.type === PRINT_PAGE) {
    dispatch({
      type: PAGE_WILL_PRINT,
    })
    setTimeout(() => {
      try {
        if (window && window.print) {
          window.print()
        } 
      } catch (e) {
        /*eslint-disable no-console */
        if (console && console.error) {
          console.error(
            'Failed to print current document'
          )
        }
        /*eslint-enabled */
      }
      dispatch({
        type: PAGE_DID_PRINT,
      })
    }, 0)
  }
  return next(action)
}