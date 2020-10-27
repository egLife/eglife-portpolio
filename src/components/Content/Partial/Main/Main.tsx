import React, { useEffect, useState } from 'react';

import Partial__Title from '../Title';
import Partial__Content from '../Content';

import './Main.scss';

type MainPropsType = {
    closeComponent: Function,
    contentData: any,
    title: string
};
type MainStateType = {};

const Main = (props: MainPropsType) => {
    const ref_partial_main: React.RefObject<HTMLDivElement> = React.createRef();
    const ref_partial_main__background: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
        if (ref_partial_main.current.style.width === '' ||
            ref_partial_main.current.style.width === '0%') {
                ref_partial_main.current.style.width =  '100%';
                ref_partial_main.current.style.height =  '100%';
                ref_partial_main.current.style.top =  '0';
                ref_partial_main.current.style.left =  '0';
                setTimeout(() => {
                    ref_partial_main__background.current.style.opacity = '0.2';
                }, 500);
        }
    });

    return (
        <div id='Content__Main' ref={ref_partial_main}>
            <div className='Content__Main__Background' ref={ref_partial_main__background}/>
            <Partial__Title title={props.title} />
            <Partial__Content contentdData={props.contentData} />
        </div>
    );
};

export default Main;