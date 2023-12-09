import './reset.css';
import './App.css';
import './github-markdown.css';
import Issues from './components/Issues';
import Details from './components/Details';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const routes = [
    { path: '/', name: 'Home', Component: Issues, exact: true },
    { path: '/issues/:id', name: 'Details', Component: Details, exact: false },
  ];

  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            {routes.map(({ path, Component, exact }) => (
              <Route exact={exact} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
