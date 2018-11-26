import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, Grid } from '@material-ui/core'

export default class Filter extends React.Component {

toggleFilter(name) {
  const selection = this.props.filters.map(boro => {
    if(boro.name === name) boro.checked = !boro.checked;
    return boro;
  });
  // this.setState({ filters: selection });
  this.props.alterFilters(selection);
};

renderFormItems() {
  const items = this.props.filters.map(filter => {
    if(filter !== undefined) {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.checked}
              onChange={() => this.toggleFilter(filter.name)}
              value={filter.checked}
            />
          }
          label={filter.name}
        />
      );
    }
  });
  return items;
}

render() {
  return (
    <FormGroup row style={{justifyContent: 'center'}}>
      { this.renderFormItems() }
    </FormGroup>
  );
}









































}
