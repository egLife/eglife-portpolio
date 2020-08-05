import React, { useEffect, useState } from 'react';

import { ContentContainerProps } from './ContentContainer';

import './Content.scss';

type ContentStateType = {
    pageNum: number
};

const Content = (props: ContentContainerProps) => {
    const [pageNum, setPageNum] = useState<ContentStateType['pageNum']>(2);

    // ComponentDidMount
    useEffect(() => {
        console.log('test');
    });

    return (
        <div id='Contents'></div>
    );
};

export default Content;