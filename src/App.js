import { Provider } from "react-redux";
import store from "./redux/store";
import PaginatedItems from "./components/paginatedItems";
const App = () => {
  return (
    <Provider store={store}>
      <PaginatedItems itemsPerPage={1} />
    </Provider>
  );
};
export default App;
