import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <AppRoute />
      </Router>
    </Provider>
  );
}

export default App;
