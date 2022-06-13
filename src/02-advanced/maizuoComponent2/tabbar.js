// import React, { Component } from "react";

// export default class Tabbar extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.list.map((item) => (
//             <li
//               key={item.id}
//               className={this.props.current === item.id ? "active" : ""}
//               onClick={() => {
//                 this.props.event(item.id);
//                 // this.setState({ current: item.id });
//               }}
//             >
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

import React from "react";

export default function tabbar(props) {
  return (
    <div>
      <ul>
        {props.list.map((item) => (
          <li
            key={item.id}
            className={props.current === item.id ? "active" : ""}
            onClick={() => {
              props.event(item.id);
              // this.setState({ current: item.id });
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
