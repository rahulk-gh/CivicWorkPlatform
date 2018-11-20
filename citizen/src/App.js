import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Divider } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange';
import { MyCard } from './components/card';
import { SideNav } from './components/sidenav';
import { Header } from './components/header';
import { articles } from './Data/DummyArticles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c62828',
    },
    secondary: deepOrange,
  },
});

const styles = {
  backgroundColor : "#343435"
}

class App extends Component {
  state = {
        customStyles: { marginTop: 100, marginLeft: 20, marginRight: 25 ,},

    cardInfo: []
  };

  componentDidMount() {
    // Fetch cards and put them into variable this.state.cardInfo
    this.setState({cardInfo: articles})
  }

  // This method iterates over and returns all cards
  renderCards() {
    // Use the Spread Operator to include entire contents of card item
    const cards = this.state.cardInfo.map((card, idx) =>
      <Grid key={idx} item xs style={this.state.customStyles}
      container spacing={6} justify="center" direction="row">
        <MyCard {...card} container spacing={1 }/>
      </Grid>
    );
    return cards;
  }
  //add nav button
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Grid container spacing={36}>
          { this.renderCards() }
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
