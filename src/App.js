import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginatedItems from "./components/paginatedItems";
import UserDetails from "./components/userDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<PaginatedItems itemsPerPage={3} />} />
          <Route exact path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;
