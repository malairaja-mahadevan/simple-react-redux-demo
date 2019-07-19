import React from 'react';
import Welcome from './Welcome';

const Home = () => ( //Stateless component
    <div className="rt-home">
        <h1 className="rt-header">Welcome to React world</h1>
        <Welcome name1="Counter" name2="Demo" />
    </div>
);

export default Home;
