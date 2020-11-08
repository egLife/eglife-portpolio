import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt';
import { faEquals } from '@fortawesome/free-solid-svg-icons/faEquals';
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs';
import { faHourglass } from '@fortawesome/free-solid-svg-icons/faHourglass';

import Partial_Main from '../Partial/Main';

import face from '@assets/project/신은규.jpeg';

import './Introduce.scss';

type IntroducePropsType = {
    closeComponent: Function,
    currentPageName: string,
};
type IntroduceStateType = {};

const Introduce = (props: IntroducePropsType) => {
    if (props.currentPageName === 'ref_introduce') {
        return (
            <div id='Content__Introduce'>
                <Partial_Main closeComponent={props.closeComponent} title='ABOUT' contentData={IntroduceContent()} />
            </div>
        );
    } else {
        return <></>;
    }

    function IntroduceContent() {
        return (
            <div className='Content__Introduce__Main'>
                <div className='Content__Introduce__MySelf'>
                    <div className='Content__Introduce__Picture'>
                        <img src={face}></img>
                    </div>
                    <div className='Content__Introduce__Text'>
                        <h4>신은규 申銀圭</h4>
                        <h3>SHIN EUN GYU</h3>
                        <p>─</p>
                        <p>1994.04.27 성남 출생</p>
                        <p>2015-2017 숭실대학교 학점은행제 정보보안학과 재학/졸업</p>
                        <p>2017-2020 숭실대학교 정보통신공학과 대학원 재학/졸업</p>
                    </div>
                </div>
                <div className='Content__Introduce__Characteristic'>
                    <div className='Content__Introduce__Characteristic__wrap'>
                        <div className='characteristic__wrap'>
                            <div className='hexagon'>
                                <FontAwesomeIcon icon={faTachometerAlt}/>
                            </div>
                            <div className='label-bold'>Fast</div>
                            <div>맡은 기간 내에 일을 끝내는 빠른 작업 속도</div>
                        </div>
                        <div className='characteristic__wrap'>
                            <div className='hexagon'>
                                <FontAwesomeIcon icon={faEquals}/>
                            </div>
                            <div className='label-bold'>Accuracy</div>
                            <div>빠른 작업속도에 걸맞는 정확성</div>
                        </div>
                    </div>
                    <div className='Content__Introduce__Characteristic__wrap'>
                        <div className='characteristic__wrap'>
                            <div className='hexagon'>
                                <FontAwesomeIcon icon={faCogs}/>
                            </div>
                            <div className='label-bold'>Sincerity</div>
                            <div>맡은 일은 끝까지 성실하게 임하는 성실함</div>
                        </div>
                        <div className='characteristic__wrap'>
                            <div className='hexagon'>
                                <FontAwesomeIcon icon={faHourglass}/>
                            </div>
                            <div className='label-bold'>Responsibility</div>
                            <div>맡은 일은 무슨 일이 있어도 완벽하게 처리하는 책임감</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Introduce;