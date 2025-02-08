import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ExampleComponent from './components/ExampleComponent';
import Movie from './pages/user/Movie';
import MovieDetail from './pages/user/MovieDetail';
import About from './pages/user/About';
import Theater from './pages/user/Theater';
import Contact from './pages/user/Contact';
import News from './pages/user/News';
import Booking from './pages/user/Booking';
import TooltipTheater from './components/TooltipTheater';
// import { seats } from './mock/mockData';
import SeatSelection from "./components/seats";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/example" component={ExampleComponent} />
          <Route path="/movie" component={Movie} />
          <Route path="/movieDetail" component={MovieDetail} />
          <Route path="/about" component={About} />
          <Route path="/theater"  component={Theater} />
          <Route path="/contact" component={Contact} />
          <Route path="/new" component={News} />
          <Route path="/booking" component={Booking} />
          <Route path="/TooltipTheater" component={TooltipTheater} />
          <Route path="/chon-ghe" component={SeatSelection} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;