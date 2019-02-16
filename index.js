class MyComponent extends React.Component {
  constructor(props) {
    console.log('this is the constructor running')
    super(props)
    this.state = {
      value: 0,
      color: '#000000',
    }
  }
  componentDidMount() {
    console.log('my component has landed!')
  }
  componentDidUpdate() {
    console.log('this component has changed in props or state')
  }
  componentWillUnmount() {
    console.log('this component is being removed from the DOM')
  }
  plusOneClick = () => {
    console.log('you clicked it')
    this.setState({
      value: this.state.value + 1,
    })
  }
  minusOneClick = () => {
    console.log('you clicked it')
    this.setState({
      value: this.state.value - 1,
    })
  }
  changeColor = () => {
    this.setState({
      color: this.state.color = ('#'+Math.floor(Math.random()*16777215).toString(16))
    })
    console.log('change color to: ' + this.state.color)
  }
  render () {
    console.log('This is the render being called', this.props)
    return <div>
      Hello {this.props.name}
      <h1 style={{ color: this.state.color }}>{this.state.value}</h1>
      <button onClick={this.plusOneClick}>+1</button>
      <button onClick={this.minusOneClick}>-1</button>
      <button onClick={this.changeColor}>Change Color</button>
      </div>
  }
}

ReactDOM.render(<MyComponent name="banana"/>, document.getElementById('root'))