import React, { Component } from "react";
import Card from "./Card";
import { Draggable } from "react-drag-reorder";

function TaskList(props) {
  const [tasks, setTasks] = React.useState([]);
  return <Tasks items={["a", "b", "c"]} />;
}
export default TaskList;

class Tasks extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="flex-container">
        <div className="row">
          <p>{this.props.items}</p>
          <Draggable>
            {this.props.items.map((word, idx) => {
              return (
                <div key={idx} className="flex-item">
                  <Card content={word}></Card>
                </div>
              );
            })}
          </Draggable>
        </div>
      </div>
    );
  }
}
