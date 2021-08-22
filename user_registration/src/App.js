import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import { UserList } from './UserList';
import { EditUser } from './EditUser';
import { CreateUser } from './CreateUser';
import MenuAppBar from './navigation';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "'Montserrat', sans-serif",
    ].join(','),
    
  }
});

function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>

      <div>
      <MenuAppBar/>
        <Switch>
          <Route exact path="/" component={UserList}/>
          <Route path="/edit/:id" component={EditUser}/>
          <Route path="/create" component={CreateUser}/>
        </Switch>
      </div>
    </ThemeProvider> 
    </Router>
  );
}

export default App;
