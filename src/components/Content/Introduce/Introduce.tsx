import React, { useEffect, useState } from 'react';

import Partial_Main from '../Partial/Main';

import './Introduce.scss';

type IntroducePropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type IntroduceStateType = {};

const Introduce = (props: IntroducePropsType) => {
    const ref_introduce: React.RefObject<HTMLDivElement> = React.createRef();

    if (props.currentPageName === 'ref_introduce') {
        return (
            <div id='Content__Introduce'>
                <Partial_Main closeComponent={props.closeComponent} title='Introduce' contentData='t' />
            </div>
        );
    } else {
        return <></>;
    }
};

export default Introduce;