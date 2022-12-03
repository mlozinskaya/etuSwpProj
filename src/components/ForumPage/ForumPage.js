import { Component } from "react";
import * as actions from "./actions"
import withNavigateHook from "../../store/withNavigateHook"
import { connect } from "react-redux";
import ForumTheme from "./components/ThemeCard";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ForumPage extends Component {
    componentDidMount() {
        this.props.getThemes()
    }

    renderThemes() {
        const { themes } = this.props.state;
        const blocks = [];

        themes.forEach(theme => {
            blocks.push(<ForumTheme name={theme.title} author={theme.author} replies={theme.replies.length} />);
        })

        return blocks;
    }

    sayHello() {
        alert('You clicked me!');
    }

    render() {
        return (
            <div className="page_background">
                <div className="add_button">
                    <Button variant="primary" onClick={this.sayHello}>
                        <FontAwesomeIcon icon={faPlus} />
                        Add theme
                    </Button>
                </div>
                <div>
                    {this.renderThemes()}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.forumReducer
});

const mapDispatchToProps = {
    ...actions
};

export default withNavigateHook(connect(
    mapStateToProps,
    mapDispatchToProps
)(ForumPage))
