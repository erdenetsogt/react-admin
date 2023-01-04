import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Switch from "./Switch";


function App({store,persistor,basename}) {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Switch/>
      </PersistGate>
    </Provider>
  );
}

export default App;