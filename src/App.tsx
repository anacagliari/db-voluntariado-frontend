import './App.css';
import { BrowserRouter as Router } from 'react-router';
import MyHeader from './components/MyHeader';

export default function App() {

  return (
    <Router>
      <body className="container App">
        <MyHeader />
      </body>
    </Router>
  )
}
