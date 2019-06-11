import UserAdd from './UserAdd';
import { connect } from 'react-redux';

function mapDispatchToProps() {
  return {
    handleSubmit: submitData => {
      console.log('SUBMIT!!', submitData);
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(UserAdd);
