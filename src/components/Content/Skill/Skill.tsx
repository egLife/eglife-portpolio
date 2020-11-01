import React, { useEffect, useState } from 'react';

import Partial_Main from '../Partial/Main';

import './Skill.scss';

type SkillPropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type SkillStateType = {};

const Skill = (props: SkillPropsType) => {
    const skill_bar_data: Array<
        {
            percentage: string,
            tag: string,
            ref_bar_fill: React.RefObject<HTMLDivElement>
        }> = [{
            percentage: '70%',
            tag: 'CSS',
            ref_bar_fill: React.createRef()
        }, {
            percentage: '70%',
            tag: 'HTML',
            ref_bar_fill: React.createRef()
        }, {
            percentage: '80%',
            tag: 'Javascript',
            ref_bar_fill: React.createRef()
        }, {
            percentage: '85%',
            tag: 'React',
            ref_bar_fill: React.createRef()
        }, {
            percentage: '80%',
            tag: 'Electron',
            ref_bar_fill: React.createRef()
        }, {
            percentage: '60%',
            tag: 'Node.js',
            ref_bar_fill: React.createRef()
        }, {
            percentage: '65%',
            tag: 'UI Design',
            ref_bar_fill: React.createRef()
        }];

    useEffect(() => {
        console.log(skill_bar_data[skill_bar_data.length - 1]);
        if (skill_bar_data[skill_bar_data.length - 1].ref_bar_fill.current !== null) {
            console.log('tttt');
            skill_bar_data.map((bar_data, index) => {
                console.log(bar_data.ref_bar_fill.current.style.animation);
                bar_data.ref_bar_fill.current.style.width = bar_data.percentage;
            });
        }
    });

    if (props.currentPageName === 'ref_skill') {
        return (
            <div id='Content__Skill'>
                <Partial_Main closeComponent={props.closeComponent} title='SKILL' contentData={SkillContent()} />
            </div>
        );
    } else {
        return <></>;
    }
    // css html javascript react electron nodejs ui design
    function SkillContent() {
        return(
            <div className='Content__Skill__Main'>
                {
                    skill_bar_data.map((bar_data, index) => {
                        return (
                            <div className='bar__flex' key={bar_data.tag}>
                                <div className='bar__fill'
                                    ref={bar_data.ref_bar_fill}
                                    // style={{
                                    //     transitionProperty: 'width',
                                    //     transitionDuration: '0.2s',
                                    //     transitionDelay: `5.${index}s`
                                    // }}
                                >
                                    <div className='tag-bold'>{bar_data.tag}</div>
                                </div>
                                <span>{bar_data.percentage}</span>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};

export default Skill;