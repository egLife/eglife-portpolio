import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

// IMAGE
import Background from '@assets/images/menu_background.jpeg';
// Container
import { MenuContainerProps } from './MenuContainer';
// Component
import Introduce from '@app/components/Content/Introduce';
import Skill from '@app/components/Content/Skill';
import Project from '@app/components/Content/Project';
import Question from '@app/components/Content/Question';
// Store
import { history } from '@app/store';

import './Menu.scss';

type MenuStateType = {
    refType: 'ref_introduce' | 'ref_skill' |
    'ref_project' | 'ref_question';
};

const Menu = (props: MenuContainerProps) => {
    const [current_page_name, changePageName] = useState('');
    const ref_background: React.RefObject<HTMLDivElement> = React.createRef();
    const ref_goBackButton: React.RefObject<HTMLDivElement> = React.createRef();
    const refDivObject: {
        ref_introduce: React.RefObject<HTMLDivElement>,
        ref_skill: React.RefObject<HTMLDivElement>,
        ref_project: React.RefObject<HTMLDivElement>,
        ref_question: React.RefObject<HTMLDivElement>,
    } = {
        ref_introduce: React.createRef(),
        ref_skill: React.createRef(),
        ref_project: React.createRef(),
        ref_question: React.createRef()
    };

    // ComponentDidMount
    useEffect(() => {
        if (ref_background.current.style.filter === '' ||
        ref_background.current.style.filter === 'brightness(0)') {
            setTimeout(() => {
                ref_background.current.style.filter = 'brightness(0.4)';
            }, 100);
        }
        // Start Animation
        if (refDivObject.ref_introduce.current.style.opacity === '0' ||
            refDivObject.ref_introduce.current.style.opacity === '') {
                startAnimation();
        }
    });

    return (
        <div id='Menu'>
            <div className='Menu_background'
                ref={ref_background}
                style={{
                    backgroundImage: `url('${Background}')`
                }}
            />
            <div className='Menu_goBack' ref={ref_goBackButton}>
                <button onClick={() => {
                    history.push('/');
                }}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <div className='Menu_content'>
                <div className='Menu_style'
                    data-name='ref_introduce'
                    ref={refDivObject.ref_introduce}
                    onClick={clickMenu}>ABOUT</div>
                <div className='Menu_style'
                    data-name='ref_skill'
                    ref={refDivObject.ref_skill}
                    onClick={clickMenu}>SKILL</div>
                <div className='Menu_style'
                    data-name='ref_project'
                    ref={refDivObject.ref_project}
                    onClick={clickMenu}>PROJECTS</div>
                <div className='Menu_style'
                    data-name='ref_question'
                    ref={refDivObject.ref_question}
                    onClick={clickMenu}>CONTACT</div>
            </div>
            {
                current_page_name !== ''
                ?
                    current_page_name === 'ref_introduce'
                    ?
                        <Introduce />
                    : current_page_name === 'ref_skill'
                    ?
                        <Introduce />
                    : current_page_name === 'ref_project'
                    ?
                        <Introduce />
                    :
                        <Introduce />
                :
                    <>
                    </>
            }
        </div>
    );

    function clickMenu(e: React.MouseEvent) {
        console.log(e.currentTarget.getAttribute('data-name'));

        const dataName: MenuStateType['refType'] | string = e.currentTarget.getAttribute('data-name');

        switch (dataName) {
            case 'ref_introduce':
            case 'ref_skill':
            case 'ref_project':
            case 'ref_question':
                changePageName(dataName);
                break;
            default: break;
        }
    }

    function startAnimation() {
        const refObjectKeys: Array<string> = Object.keys(refDivObject);

        if (refObjectKeys.length > 0) {
            setTimeout(() => {
                refObjectKeys.map((key: MenuStateType['refType']) => {
                    refDivObject[key].current.style.opacity = '1';
                });

                ref_goBackButton.current.style.opacity = '1';

                setTimeout(() => {
                    refObjectKeys.map((key: MenuStateType['refType']) => {
                        if (key !== 'ref_introduce') {
                            refDivObject[key].current.style.left = '50.6%';
                        }
                    });
                }, 300);
                setTimeout(() => {
                    refObjectKeys.map((key: MenuStateType['refType']) => {
                        if (key !== 'ref_introduce' && key !== 'ref_skill') {
                            refDivObject[key].current.style.top = '50.5%';
                        }
                    });
                }, 800);
                setTimeout(() => {
                    refObjectKeys.map((key: MenuStateType['refType']) => {
                        if (key === 'ref_project') {
                            refDivObject[key].current.style.left = '0%';
                        }
                    });
                }, 1300);
            }, 500);
        }
    }
};

export default Menu;