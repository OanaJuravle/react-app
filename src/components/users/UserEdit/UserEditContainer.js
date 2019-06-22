import UserEdit from "./UserEdit";
import { connect } from "react-redux";
import { users } from "../data";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleFormSubmit: submitData => {
      console.log("SUBMIT ON EDIT", submitData);
    },
    loadUser: ({ id }) => users.find(user => user.id.toString() === id)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserEdit);
