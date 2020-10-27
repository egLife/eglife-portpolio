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
                <Partial_Main closeComponent={closeIntroduce} title='Introduce' contentData='t' />
            </div>
        );
    } else {
        return <></>;
    }

    function closeIntroduce() {
        ref_introduce.current.style.width =  '0%';
        ref_introduce.current.style.height =  '0%';
        ref_introduce.current.style.top =  '50%';
        ref_introduce.current.style.left =  '50%';
        setTimeout(() => {
            props.closeComponent();
        }, 1000);
    }
};

export default Introduce;