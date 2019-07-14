import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import ProgressBar from './containers/ProgressBar/ProgressBar';

class App extends Component{
  render() {
    return (
        <div>
          <Layout>
            <ProgressBar />
          </Layout>
        </div>
    );
  }
}




export default App;
