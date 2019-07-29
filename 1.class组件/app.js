/**
 * 目的：熟悉react的class组件写法
 */
function App(props) {
  return (
    <div>
      <Box1 name="gaohang" />
      <Box2 name="huanhuan" />
    </div>
  )
}

class Box1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
  minus() {
    this.setState({
      number: this.state.number - 1
    })
  }
  render() {
    return (
      <div className="red">
        <span>计数{this.state.number}</span>
        <span>名字是：{this.props.name}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

class Box2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add() {
    this.setState({
      number: this.state.number + 2
    })
  }
  minus() {
    this.setState({
      number: this.state.number - 2
    })
  }
  render() {
    return (
      <div className="red">
        <span>计数{this.state.number}</span>
        <span>名字是：{this.props.name}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

render()

function render() {
  ReactDOM.render(
    <App />, // React.createElement(App)
    document.querySelector('#root')
  )
}
