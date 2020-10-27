import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import './Foot.scss';

type FootPropsType = {
    closeComponent: Function
};
type FootStateType = {};

const Foot = (props: FootPropsType) => {
    // const ref_partial_main: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
    });

    return (
        <button id='Content__Main__Foot' onClick={() => {
            props.closeComponent();
        }}>
            <FontAwesomeIcon icon={faTimes}/>
        </button>
    );
};

export default Foot;