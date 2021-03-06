//@packages
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//@scripts
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route path='/' exact component={Chat} />
    </Router>
);

export default App;