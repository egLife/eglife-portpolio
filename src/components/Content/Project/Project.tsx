import React, { useEffect, useState } from 'react';

import Partial_Main from '../Partial/Main';

import './Project.scss';

type ProjectPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type ProjectStateType = {};

const Project = (props: ProjectPropsType) => {
    const ref_project: React.RefObject<HTMLDivElement> = React.createRef();

    if (props.currentPageName === 'ref_project') {
        return (
            <div id='Content__Project'>
                <Partial_Main closeComponent={props.closeComponent} title='PROJECTS' contentData='t' />
            </div>
        );
    } else {
        return <></>;
    }
};

export default Project;