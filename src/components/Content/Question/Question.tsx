import React, { useEffect, useState } from 'react';

import Partial_Main from '../Partial/Main';

import './Question.scss';

type QuestionPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type QuestionStateType = {};

const Question = (props: QuestionPropsType) => {
    const ref_question: React.RefObject<HTMLDivElement> = React.createRef();

    if (props.currentPageName === 'ref_question') {
        return (
            <div id='Content__Question'>
                <Partial_Main closeComponent={props.closeComponent} title='CONTACT' contentData='t' />
            </div>
        );
    } else {
        return <></>;
    }
};

export default Question;