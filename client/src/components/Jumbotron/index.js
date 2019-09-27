// import React from 'react';
// import './index.css';

// function Jumbotron() {
//     return (
//         <div className="container mt-4">
//             <div className="jumbotron text-center bg-dark text-white">
//                 <h1 className="display-4">Book Search</h1>
//                 <p className="lead">Search and Save Books</p>
//             </div>
//         </div>
//     );
// }

// export default Jumbotron; 
import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;