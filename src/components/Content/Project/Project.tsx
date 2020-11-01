import React from 'react';

import Partial_Main from '../Partial/Main';
import Gallery from './Gallery';

import './Project.scss';

type ProjectPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type ProjectStateType = {};

const Project = (props: ProjectPropsType) => {
    if (props.currentPageName === 'ref_project') {
        return (
            <div id='Content__Project'>
                <Partial_Main closeComponent={props.closeComponent} title='PROJECTS' contentData={ProjectContent()} />
            </div>
        );
    } else {
        return <></>;
    }

    function ProjectContent() {
        return(
            <div className='Content__Project__Main'>
                <Gallery />
            </div>
        );
    }
};

export default Project;