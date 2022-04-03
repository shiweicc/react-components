class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      mouseOver: false,
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };

  mouseOverItem() {
    this.setState({
      mouseOver: !this.state.mouseOver
    });
  };

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.mouseOver ? 'bold' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.mouseOverItem.bind(this)}>{this.props.todo}</li>
    )
  };
};


var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My TO-DO List</h2>
    <TodoList todos={['apple', 'banana', 'kiwi']}/>
  </div>
);



ReactDOM.render(
  <App />, document.getElementById('app')
  );


  /* var Apple = () => (
    <li>apple</li>
  )

  var Banana = () => (
    <li>banana</li>
  )

  var Kiwi = () => (
    <li>kiwi</li>
  )

  var TodoList = (props) => (
      <ul>
        <li>{props.todos[0]}</li>
        <li>{props.todos[1]}</li>
        <li>{props.todos[2]}</li>
      </ul>
  ); */