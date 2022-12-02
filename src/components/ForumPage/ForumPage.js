import { Component } from "react";
import * as actions from "./actions"
import withNavigateHook from "../../store/withNavigateHook"
import { connect } from "react-redux";
import ForumTheme from "../containers/ForumTheme";

class ForumPage extends Component {
    getThemes() {
        const themes = ["abcde", "1234"];
        const blocks = [];

        // themes.forEach(theme => {
        //     blocks.push(<div className="theme_container">
        //         {theme}
        //     </div>);
        // })

        themes.forEach(theme => {
            blocks.push(<ForumTheme name={theme} author="author">
        
            </ForumTheme>);
        })

        return blocks;
    }

    render() {
        return (
            <div className="page_background">
                {this.getThemes()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.forumReducer
});

export default withNavigateHook(connect(
    mapStateToProps,
    { actions }
)(ForumPage))
