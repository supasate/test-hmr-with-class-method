import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      showTest: false,
    }
  }
  componentDidMount() {
    console.log('App didMount')
  }

  componentDidUpdate() {
    console.log('App didUpdate')
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  toggleHandler = () => {
    this.setState({
      showTest: !this.state.showTest,
    })
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.clickHandler}>+1</button>
        <button onClick={this.toggleHandler}>Toggle</button>
        {this.state.showTest ? <Test /> : null}
      </div>
    )
  }
}

class Test extends Component {
  componentDidMount() {
    console.log('Test didMount')
  }
  render() {
    return (
      <div>Test</div>
    )
  }
}

const MainApp = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
)

export default MainApp
