import './App.css';
import './hover-buttons.css';

import { useQuery } from "graphql-hooks";
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const test = `query test {
  allEdicionesLaHuellas {
    id
    nombre
    _status
    _firstPublishedAt
    detalles {
      bigTitle
      buttonText
      description
      id
      smallTitle
    }
  }
  _allEdicionesLaHuellasMeta {
    count
  }
  edicionesLaHuella {
    nombre
    slug
    detalles {
      smallTitle
      id
      description
      buttonText
      bigTitle
    }
  }
}
`;

function App() {

  const { loading, error, data } = useQuery(test, {
    variables: {
      limit: 10
    }
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home details={data} />}></Route>
            <Route exact path='/home' element={<Home details={data} />}></Route>
            <Route exact path='*' element={<NotFound details={data} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
