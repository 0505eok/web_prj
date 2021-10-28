import { Route, Link, Switch} from 'react-router-dom';
import Login from './Login.js';
import User from './User.js';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/login'>로그인</Link>
        </li>
        <li>
          <Link to='/user'>사용자</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/user' component={User}/>
      </Switch>
    </div>
  );
}

export default App;
