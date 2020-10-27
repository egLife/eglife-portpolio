import React, { useEffect, useState } from 'react';

import Partial_Main from '../Partial/Main';

import './Skill.scss';

type SkillPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type SkillStateType = {};

const Skill = (props: SkillPropsType) => {
    const ref_skill: React.RefObject<HTMLDivElement> = React.createRef();

    if (props.currentPageName === 'ref_skill') {
        return (
            <div id='Content__Skill'>
                <Partial_Main closeComponent={props.closeComponent} title='Skill' contentData='t' />
            </div>
        );
    } else {
        return <></>;
    }
};

export default Skill;