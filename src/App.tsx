import './App.css';
import { BrowserRouter as Router } from 'react-router';
import MyHeader from './components/MyHeader';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  return (
    <Router>
      <body className="container App">
        <MyHeader />
      </body>
    </Router>
  )
}
