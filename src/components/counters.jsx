import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <div className="list-group">
          <button
            onClick={onReset}
            className="btn btn-primary btn-sm m-2 active"
          >
            Reset Items
          </button>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
