import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange';
import { MyCard } from './components/Card';
import Header from './components/Header';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Filter from './containers/Filter';
// import { MyModal } from './components/Modal';
import { articles } from './Data/DummyArticles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c62828',
    },
    secondary: deepOrange,
  },
});

class App extends Component {
  state = {
    customStyles: { marginTop: 100, marginLeft: 20, marginRight: 25 },
    cardInfo: [],
    modalOpen: false,
  };

  componentDidMount() {
    // Fetch cards and put them into variable this.state.cardInfo
    this.setState({cardInfo: articles});

  }

  // const scrollPoint = document.querySelector('.my-section').offsetTop;
  // window.scrollTo({ top: scrollPoint, behavior: 'smooth' })

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  // This method iterates over and returns all cards
  renderCards() {
    // Use the Spread Operator to include entire contents of card item
    let matches;
    const allBoxes = this.props.filters.filter(item => item.name === 'All');
    const [ all ] = allBoxes;

    if (!all.checked) {
      matches = this.state.cardInfo.filter(card => {
       const entryArray = this.props.filters.filter(filter => filter.name === card.boro);
       const [ entry ] = entryArray;
       if(entry.checked) return card;
     });
   } else {
     matches = this.state.cardInfo;
   }

    console.log(matches)

    const cards = matches.map((card, idx) =>
      <Grid key={idx} item xs style={this.state.customStyles}
      container spacing={6} >
        <MyCard
          toggleModal={() => this.toggleModal()}
          modalOpen={this.state.modalOpen}
          container
          spacing={1}
          {...card}
        />
      </Grid>
    );
    return cards;
  }
  //add nav button
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <About />
        <div className="container">
          <Filter />
        </div>
        <Grid id="Articles" container spacing={36}>
          { this.renderCards() }
        </Grid>
        <Contact />
      </MuiThemeProvider>
    );
  }
}

export default App;
