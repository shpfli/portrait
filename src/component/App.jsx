import React, {Component} from 'react';
import './App.less';
import '../stylesheets/github-dark.css';
import '../stylesheets/styles.css';

class App extends Component {
  render() {
    return <div className="wrapper">
      <header class="without-description">
        <h1>Welcome to the Hubery's Homepage
        </h1>
        <p></p>
        <p class="view">
          <a href="https://github.com/shpfli">View the author on GitHub
            <small>shpfli</small>
          </a>
        </p>
        <ul>
          <li class="single">
            <a href="https://github.com/shpfli/portrait">View On
              <strong>GitHub</strong>
            </a>
          </li>
        </ul>
      </header>
    </div>
  }
}

export default App;
