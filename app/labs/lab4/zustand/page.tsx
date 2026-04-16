import ZustandCounter from "./counter";
import { Provider } from "react-redux";
import store from "../store";
export default function ZustandExamples() {
 return (
<Provider store={store}>
   <div>
     <h2>Zustand Examples</h2>
     <ZustandCounter />
   </div>
   </Provider>

 );
}
