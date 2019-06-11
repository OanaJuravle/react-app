import UsersIndex from './UsersIndex';
import { connect } from 'react-redux';
import { users } from '../data';

function mapDispatchToProps() {
  return {
    onCustomClick: e => {
      console.log('FROM PARENT', e);
    },
  };
}

function mapStateToProps() {
  return { users };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersIndex);
