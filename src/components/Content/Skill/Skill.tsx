import React, { useEffect, useState } from 'react';

import './Skill.scss';

type SkillPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type SkillStateType = {};

const Skill = (props: SkillPropsType) => {
    const ref_skill: React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
        if (props.currentPageName === 'ref_skill' && (ref_skill.current.style.width === '' ||
            ref_skill.current.style.width === '0%')) {
                ref_skill.current.style.width =  '100%';
                ref_skill.current.style.height =  '100%';
                ref_skill.current.style.top =  '0';
                ref_skill.current.style.left =  '0';
        }
    });

    if (props.currentPageName === 'ref_skill') {
        return (
            <div id='Content__Skill' ref={ref_skill} onClick={closeIntroduce}>
            </div>
        );
    } else {
        return <></>;
    }

    function closeIntroduce() {
        ref_skill.current.style.width =  '0%';
        ref_skill.current.style.height =  '0%';
        ref_skill.current.style.top =  '50%';
        ref_skill.current.style.left =  '50%';
        setTimeout(() => {
            props.closeComponent();
        }, 1000);
    }
};

export default Skill;