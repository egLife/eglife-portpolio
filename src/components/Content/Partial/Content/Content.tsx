import React from 'react';

import './Content.scss';

type ContentPropsType = {
    contentdData: any
};
type ContentStateType = {};

const Content = (props: ContentPropsType) => {
    return (
        <div id='Content__Main__Content'>
            {props.contentdData}
        </div>
    );
};

export default Content;