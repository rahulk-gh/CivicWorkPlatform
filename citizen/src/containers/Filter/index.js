import Filter from '../../components/Filter';
import { changeFilters, newAcrt } from './actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  filters: state.toJS().filterReducer.filters,
});

const mapDispatchToProps = (dispatch) => ({
  alterFilters: (newFilters) => {
    dispatch(changeFilters(newFilters));
  },
  // doSomethingElse: () => {
  //   dispatch(somethingAction())
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
