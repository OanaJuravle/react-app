import UsersIndex from "./UsersIndex";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { users } from "../data";

function mapDispatchToProps() {
  return {
    onCustomClick: e => {
      console.log("FROM PARENT", e);
    }
  };
}

function mapStateToProps() {
  return { users };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersIndex)
);
