import { Component } from "react";
import * as actions from "./actions"
import withNavigateHook from "../../store/withNavigateHook"
import { connect } from "react-redux";

class HomePage extends Component {
    render() {
        return (
            <div>HOME PAGE</div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.homeReducer
});

export default withNavigateHook(connect(
    mapStateToProps, 
    {actions}
)(HomePage))
