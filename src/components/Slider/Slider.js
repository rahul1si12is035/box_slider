/*** Imports ***/

/* Library imports */

import React from "react";
import PropTypes from 'prop-types';

/* Style imports */
// import './styles.css';


/*** End Imports ***/

const Slider = (props) => {

    // helper function
    // event handlers for static component

    // const handleChangeSlider = (event) => {
    //     props.handleChangeSlider(event);
    // };
    const { value, handleChangeSlider, name } = props;

    return (
        <div className="slider-wrapper">
            <input
                id="typeinp"
                type="range"
                // min="2"
                // max="50"
                name={name}
                value={value}
                onChange={(event) => handleChangeSlider(event)}
                step="1"
            />
        </div>
    );
};

/**
 * all prop types which can be passed to this component
 */
Slider.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Slider.defaultProps = {

};

export default Slider;