import React, { Component } from "react";

// Stateless Functional Component
// const NavNar = ({ totalCounters }) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       Counter
//       <span className="badge badge-pill badge-secondary">{totalCounters}</span>
//     </nav>
//   );
// };

// export default NavNar;
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h3>
          <span className="badge badge-warning">Cart</span>
        </h3>
        <span className="badge badge-pill badge-warning">
          Item Selected {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default NavBar;
