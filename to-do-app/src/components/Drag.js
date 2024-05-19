import React, { Component } from "react";
import Card from "./Card";
import { Draggable } from "react-drag-reorder";

class Drag extends Component {
  constructor(items) {
    super();
    this.words = ["Hello", "Hi", "How are you", "Cool"];
  }
  render() {
    return (
      <div className="flex-container">
        <div className="row">
          <Draggable>
            {this.words.map((word, idx) => {
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

export default Drag;
