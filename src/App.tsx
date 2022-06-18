import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./lib/redux";

import { PureInboxScreen } from "./components/InboxScreen";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PureInboxScreen />
      </Provider>
    );
  }
}

export default App;
