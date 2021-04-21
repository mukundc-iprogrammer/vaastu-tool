import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import VaastuCheck from './components/VaastuCheck/VaastuCheck';
import VaastuScore from './components/VaastuScore/VaastuScore';
import VaastuScoreCheck from './container/VaastuScoreCheck/VaastuScoreCheck';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={VaastuCheck} />
        <Route path='/vaastuscorecheck' component={VaastuScoreCheck} />
        <Route path='/vaastuscore' component={VaastuScore} />
      </Switch>
    </div>
  );
}

export default App;
