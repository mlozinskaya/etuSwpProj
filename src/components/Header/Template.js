import { Component } from "react";
import * as actions from "./actions"
import withNavigateHook from "../../store/withNavigateHook"
import { connect } from "react-redux";

class Header extends Component {
    render() {
        console.log(this.props.actions.getThemes());

        return (
            <div>HEADER</div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.headerReducer
});

export default withNavigateHook(connect(
    mapStateToProps, 
    {actions}
)(Header))
