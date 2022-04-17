import "./App.css";
import { Provider } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";
import Homepage from "./components/homepage/homepage";
import Menu from "./components/menu/menu";
import store from "./store/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/menu" element={<Menu />}></Route>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     isMenuLayout: state.menuReducers.isMenuLayout,
//   };
// };

export default App;
