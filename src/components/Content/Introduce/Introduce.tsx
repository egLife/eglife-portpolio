import React, { useEffect, useState } from 'react';

import './Introduce.scss';

type IntroducePropsType = {
    closeComponent: Function
};
type IntroduceStateType = {};

const Introduce = (props: IntroducePropsType) => {
    const ref_introduce: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
        if (ref_introduce.current.style.width === '' ||
            ref_introduce.current.style.width === '0%') {
                ref_introduce.current.style.width =  '100%';
                ref_introduce.current.style.height =  '100%';
                ref_introduce.current.style.top =  '0';
                ref_introduce.current.style.left =  '0';
        }
    });

    return (
        <div id='Content__Introduce' ref={ref_introduce} onClick={closeIntroduce}></div>
    );

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