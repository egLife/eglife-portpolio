import React, { useEffect, useState } from 'react';

import './Content.scss';

type ContentPropsType = {
    contentdData: any
};
type ContentStateType = {};

const Content = (props: ContentPropsType) => {
    // const ref_partial_main: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
    });

    return (
        <div id='Content__Main__Content'>
            {props.contentdData}
        </div>
    );
};

export default Content;