import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function ForumTheme(props) {
    return (
        <div className="theme_container">
            <div className="theme_name_container">
                <div className="theme_name">{props.name}</div>
                <div className="theme_author">{props.author}</div>
            </div>
            <div className="theme_status_container">
                <FontAwesomeIcon icon={faComment} />
                <span> {props.replies} replies</span>
            </div>
        </div>
    );
}