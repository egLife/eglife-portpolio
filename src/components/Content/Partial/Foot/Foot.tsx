import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import './Foot.scss';

type FootPropsType = {
    closeComponent: Function
};
type FootStateType = {};

const Foot = (props: FootPropsType) => {
    return (
        <div id='Content__Main__Foot'>
            <button onClick={() => {
                props.closeComponent();
            }}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </div>

    );
};

export default Foot;