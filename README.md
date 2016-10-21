# Redux Print

Sometimes you [can't force CSS transitions](http://stackoverflow.com/questions/22748124/css-transitions-with-print-styles) while trying to print the page. In this case you will be confused when you find out that your page will be printed not as you expected it (surprise!).
    
To solve that you can force a hiding of some elements using Virtual DOM.

## Example

### my-widget.js

```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { PRINT_PAGE } from 'redux-print'

class MyWidget extends Component {
  
  render() {
    const { printPage, printPageState } = this.props
    const className = cx({
      'widget': true,
      'widget--print': printPageState.isProcessing,
    })
    return (
      <div className={className}>
        {(printPageState.isProcessing === false) && (
          <button onClick={printPage}>
            Print
          </button>
        )}
        {/* Content */}
      </div>
    )
  }
}

const mapStateToProps = ({ pagePrinting }) => ({
  printPageState,
})

const mapDispatchToProps = {
  printPage: () => ({
    type: PRINT_PAGE,
  }),
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWidget)
```

### store.js
 
```javascript
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as printPageReducer } from 'redux-print'
import { middleware as printPageMiddleware } from 'redux-print'
import reducers from './my-reducers'

const reducer = combineReducers({
  printPage: printPageReducer,
  ...reducers,
})

const finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware
    printPageMiddleware,
  ),
)(createStore)

export default finalCreateStore
```
