import React, { useEffect, useState } from 'react';

import './Question.scss';

type QuesitonPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type QuesitonStateType = {};

const Quesiton = (props: QuesitonPropsType) => {
    const ref_question: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
        if (props.currentPageName === 'ref_question' && (ref_question.current.style.width === '' ||
            ref_question.current.style.width === '0%')) {
                ref_question.current.style.width =  '100%';
                ref_question.current.style.height =  '100%';
                ref_question.current.style.top =  '0';
                ref_question.current.style.left =  '0';
        }
    });

    if (props.currentPageName === 'ref_question') {
        return (
            <div id='Content__Question' ref={ref_question} onClick={closeIntroduce}>
            </div>
        );
    } else {
        return <></>;
    }

    function closeIntroduce() {
        ref_question.current.style.width =  '0%';
        ref_question.current.style.height =  '0%';
        ref_question.current.style.top =  '50%';
        ref_question.current.style.left =  '50%';
        setTimeout(() => {
            props.closeComponent();
        }, 1000);
    }
};

export default Quesiton;