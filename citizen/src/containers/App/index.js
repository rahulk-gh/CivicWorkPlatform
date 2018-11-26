import App from '../../App.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  filters: state.toJS().filterReducer.filters,
});

export default connect(mapStateToProps)(App);
