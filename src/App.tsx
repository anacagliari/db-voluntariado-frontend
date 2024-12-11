import './App.css';
import { BrowserRouter as Router } from 'react-router';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App() {

  return (
    <Router>
      <body className="container App">
        <MyHeader />
        <MyFooter />
      </body>
    </Router>
  )
}
