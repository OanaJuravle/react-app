import UserAdd from "./UserAdd";
import { connect } from "react-redux";

function mapDispatchToProps() {
  return {
    handleFormSubmit: submitData => {
      console.log("SUBMIT ON ADD", submitData);
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserAdd);
