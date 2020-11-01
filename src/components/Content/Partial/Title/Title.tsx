import React from 'react';

import './Title.scss';

type TitlePropsType = {
    title: string
};
type TitleStateType = {};

const Title = (props: TitlePropsType) => {

    return (
        <div id='Content__Main__Title'>
            {props.title}
        </div>
    );
};

export default Title;