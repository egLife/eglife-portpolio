import React, { useEffect, useState } from 'react';

import './Project.scss';

type ProjectPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type ProjectStateType = {};

const Project = (props: ProjectPropsType) => {
    const ref_project: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
        if (props.currentPageName === 'ref_project' && (ref_project.current.style.width === '' ||
            ref_project.current.style.width === '0%')) {
                ref_project.current.style.width =  '100%';
                ref_project.current.style.height =  '100%';
                ref_project.current.style.top =  '0';
                ref_project.current.style.left =  '0';
        }
    });

    if (props.currentPageName === 'ref_project') {
        return (
            <div id='Content__Project' ref={ref_project} onClick={closeIntroduce}>
            </div>
        );
    } else {
        return <></>;
    }

    function closeIntroduce() {
        ref_project.current.style.width =  '0%';
        ref_project.current.style.height =  '0%';
        ref_project.current.style.top =  '50%';
        ref_project.current.style.left =  '50%';
        setTimeout(() => {
            props.closeComponent();
        }, 1000);
    }
};

export default Project;