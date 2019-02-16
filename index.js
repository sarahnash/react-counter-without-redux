class MyComponent extends React.Component {
  constructor(props) {
    console.log('this is the constructor running')
    super(props)
    this.state = {
      value: 0,
    }
  }
  componentDidMount() {
    console.log('my component has landed!')
  }
  componentDidUpdate() {
    console.log('this component has changed in props or state')
  }
  componeWillUnmount() {
    console.log('this component is being removed from the DOM')
  }
  handleClick = () => {
    console.log('you clicked it')
    this.setState({
      value: this.state.value + 1,
    })
  }
  render () {
    console.log('This is the render being called', this.props)
    return <div>
      Hello {this.props.name}
      <h1>{this.state.value}</h1>
      <button onClick={this.handleClick}>Click me!</button>
      </div>
  }
}

ReactDOM.render(<MyComponent name="banana"/>, document.getElementById('root'))