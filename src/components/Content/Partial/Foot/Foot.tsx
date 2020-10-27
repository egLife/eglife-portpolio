import React, { useEffect, useState } from 'react';

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
        <div id='Content__Main__Foot'>
            {/* {props.title} */}
        </div>
    );
};

export default Foot;