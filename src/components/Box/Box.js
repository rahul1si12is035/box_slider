/*** Imports ***/

/* Library imports */

import React from "react";
import PropTypes from 'prop-types';

/* Style imports */
import './styles.css';


/*** End Imports ***/

const Box = (props) => {

    // helper function
    // event handlers for static component
    // const width = props.width
    return (
        <div
            className="box-wrapper"
            style={{
                width: parseInt(props.width),
                background: 'blue'
            }}
        >

        </div>
    );
};

/**
 * all prop types which can be passed to this component
 */
Box.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Box.defaultProps = {

};

export default Box;