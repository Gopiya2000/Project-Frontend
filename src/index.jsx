import React from "react";
import reactDom from "react-dom";
import App from "./src/App"

// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
//   }

reactDom.render(<App />, document.getElementById("root"));
