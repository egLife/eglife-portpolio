import React from 'react';

import './Content.scss';

type ContentPropsType = {
    contentdData: any
};
type ContentStateType = {};

const Content = (props: ContentPropsType) => {
    return (
        <section id='Content__Main__Content'>
            {props.contentdData}
        </section>
    );
};

export default Content;