import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

import './App.css'
let data=[{uv:1},{uv:2},{uv:3},{uv:2},{uv:-2},{uv:10},{uv:15},{uv:18}]
class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default App;
