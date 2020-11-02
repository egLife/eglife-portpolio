import React from 'react';

import './Title.scss';

type TitlePropsType = {
    title: string
};
type TitleStateType = {};

const Title = (props: TitlePropsType) => {

    return (
        <section id='Content__Main__Title'>
            {props.title}
        </section>
    );
};

export default Title;