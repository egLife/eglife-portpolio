import React, { useEffect, useState } from 'react';

import './Title.scss';

type TitlePropsType = {
    title: string
};
type TitleStateType = {};

const Title = (props: TitlePropsType) => {
    // const ref_partial_main: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
    });

    return (
        <div id='Content__Main__Title'>
            {props.title}
        </div>
    );
};

export default Title;