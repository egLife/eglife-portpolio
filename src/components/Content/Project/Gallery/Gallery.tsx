import React, { useState, useEffect } from 'react';

import Player1 from '@assets/project/player-1.jpeg';
import Player2 from '@assets/project/player-2.jpeg';
import Player3 from '@assets/project/player-3.jpeg';
import PlayerMain from '@assets/project/PlayerMain.jpeg';
import Dashboard1 from '@assets/project/dashboard-1.jpeg';
import Dashboard2 from '@assets/project/dashboard-2.jpeg';
import Dashboard3 from '@assets/project/dashboard-3.jpeg';
import DashboardMain from '@assets/project/DashboardMain.jpeg';
import mirrorMain from '@assets/project/mirrorMain.jpeg';
import Site1 from '@assets/project/site-1.jpeg';
import Site2 from '@assets/project/site-2.jpeg';
import Site3 from '@assets/project/site-3.jpeg';
import Site4 from '@assets/project/site-4.jpeg';
import Shinbo1 from '@assets/project/shinbo-1.jpeg';
import Shinbo2 from '@assets/project/shinbo-2.jpeg';
import Shinbo3 from '@assets/project/shinbo-3.jpeg';
import Shinbo4 from '@assets/project/shinbo-4.jpeg';


import './Gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

type GalleryPropsType = {};
type GalleryStateType = {};

const Gallery = (props: GalleryPropsType) => {
    const ref_popUp: React.RefObject<HTMLDivElement> = React.createRef();
    const [status, changeStatus] = useState(false);
    const [galleryData, changeData] = useState('' as any);
    const [blockDoubleClick, changeBlockDoubleClick] = useState(true);
    const gallery_data: Array<
        {
            title: string,
            langauge: string,
            main: string,
            picture: Array<{
                type: 'video' | 'image',
                src: string
            }>,
            data: string,
            explanation: string,
            site: string
        }> = [{
            title: 'Cublick Signage Player',
            langauge: 'electron/react',
            main: PlayerMain,
            picture: [{
                type: 'image',
                src: Player1
            }, {
                type: 'image',
                src: Player2
            }, {
                type: 'image',
                src: Player3
            }],
            data: '2017.06-2020.06',
            explanation: 'Cublick Signage Player는 고객이 원하는 광고 화면을 고객이 만들어 화면에 표출시키는 사이니지 플레이어이로 웹 어플리케이션이다. 위에 보여지는 이미지들은 플레이어에 표출되고 있는 화면들이다.',
            site: 'https://cdn.cublick.com/public/binaries/win32/x64/Cublick_Cloud_Player-setup.exe'
        }, {
            title: 'Cublick Mirror Player',
            langauge: 'electron/react',
            main: mirrorMain,
            picture: [{
                type: 'video',
                src: 'https://www.youtube.com/embed/mrNz0GWB6_w'
            }],
            data: '2018.11-2019.06',
            explanation: '거울의 역할 및 광고판의 역할을 하며 고객이 거울로 보고 있는 화면을 찍어 QR코드를 생성 QR코드를 이용하여 고객의 핸드폰 및 컴퓨터에 저장할 수 있도록 해주는 미러 플레이어다.',
            site: ''
        }, {
            title: 'Cublick',
            langauge: 'react',
            main: Site1,
            picture: [{
                type: 'image',
                src: Site2
            }, {
                type: 'image',
                src: Site3
            }, {
                type: 'image',
                src: Site4
            }],
            data: '2017.10-2017.11',
            explanation: 'Cublick 회사를 소개해 주는 홈페이지이다.',
            site: 'https://www.cublick.com/'
        }, {
            title: 'Cublick Dashboard',
            langauge: 'react',
            main: DashboardMain,
            picture: [{
                type: 'image',
                src: Dashboard1
            }, {
                type: 'image',
                src: Dashboard2
            }, {
                type: 'image',
                src: Dashboard3
            }],
            data: '2020.01-2020.06',
            explanation: '플레이어에 표출시킬 광고를 만들기 위한 홈페이지로 플레이리스트, 스케줄, 인스턴트 메시지 등의 기능들을 플레이어로 전송시켜 실행시키는 역할을 한다.',
            site: 'https://app.cublick.com/'
        }, {
            title: 'ShinboINC',
            langauge: 'react/node',
            main: Shinbo1,
            picture: [{
                type: 'image',
                src: Shinbo1
            }, {
                type: 'image',
                src: Shinbo2
            }, {
                type: 'image',
                src: Shinbo3
            }, {
                type: 'image',
                src: Shinbo4
            }],
            data: '2020.07-2020.09',
            explanation: 'ShinboINC 회사에 대한 소개 및 지도와 옷감의 종류, 색감 수량 등을 나타내는 홈페이지이다. 로컬서버를 이용하여 홈페이지 관리자가 직접 옷감의 사진과 데이터들을 수정가능하다.',
            site: 'http://shinboinc.com/#/'
        }];

    useEffect(() => {
        console.log(ref_popUp.current);
        if (ref_popUp.current !== null) {
            ref_popUp.current.style.opacity = '1';
            ref_popUp.current.style.transform = 'scale(1)';
        }
    }, [status]);

    return (
        <div id='gallery'>
            {
                gallery_data.map((data, index) => {
                    return (
                        <div className='card'
                            key={data.title}
                        >
                            <div className='card_bg'>
                                <div className='bgImage'
                                    style={{
                                        animation: 'flipInX 0.75s ease both',
                                        animationDelay: `0.${(index + 1) + 3}s`,
                                        backgroundImage: `url('${data.main}')`
                                    }}
                                />
                            </div>
                            <div className='text'>
                                <div className='bold'>{data.title}</div>
                                <div className='highlight'>{data.langauge}</div>
                            </div>
                            <div className='button' data-title={data.title} onClick={controlPopup}>LEAN MORE</div>
                        </div>
                    );
                })
            }
            {
                status
                ?
                    <div className='popUp' >
                        <div className='popUp_main' ref={ref_popUp}>
                            <div className='image_slide'>
                            {
                                galleryData.picture.map((picture_data: any, index: number) => {
                                    if (picture_data.type === 'image') {
                                        return <img className='gallery_slider' key={index} src={picture_data.src} style={{
                                            left: `${-100 + index * 100}%`
                                        }}/>;
                                    } else {
                                        return <iframe className='gallery_video' frameBorder='0' key={index} src={picture_data.src}
                                                allow='showinfo: false; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' />;
                                    }
                                })
                            }
                                {
                                    galleryData.picture[0].type === 'image'
                                    ?
                                        galleryData.picture.length !== 1
                                        ?
                                            <div>
                                                <button className='image_left' onClick={() => {
                                                    slide('LEFT');
                                                }}>
                                                    <FontAwesomeIcon icon={faAngleLeft}/>
                                                </button>
                                                <button className='image_right' onClick={() => {
                                                    slide('RIGHT');
                                                }}>
                                                    <FontAwesomeIcon icon={faAngleRight}/>
                                                </button>
                                            </div>
                                        :
                                            <></>
                                    : <></>
                                }
                            </div>
                            <div className='content'>
                                <div className='bold'>{galleryData.title}</div>
                                <div className='sub_title'>
                                    <span>{galleryData.langauge} </span>
                                    <span style={{float: 'right'}}>{galleryData.data}</span>
                                </div>
                                <div className='detail'>{galleryData.explanation}</div>
                                <a href={galleryData.site} className='popUp_function' target='_black'>
                                    <div className={'popUp_content' + (galleryData.site !== '' ? ' visible' : '')}>
                                        <div className='popUp_svg'>
                                            <FontAwesomeIcon icon={faExternalLinkAlt}/>
                                        </div>
                                        <div className='src'>VIEW SITE</div>
                                    </div>
                                </a>
                                <FontAwesomeIcon className='close_popUp' icon={faTimes} onClick={closePopUp}/>
                            </div>
                        </div>
                    </div>
                :
                    <></>
            }
        </div>
    );

    function controlPopup(data: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const dataStatus = gallery_data.filter((gallery: any) => {
            if (gallery.title === data.currentTarget.getAttribute('data-title')) {
                changeData(gallery);
                return gallery;
            }
        });
        if (typeof dataStatus !== 'undefined') {
            changeStatus(true);
        }
    }

    function closePopUp() {
        ref_popUp.current.style.transform = 'scale(0.2)';
        ref_popUp.current.style.opacity = '0';
        setTimeout(() => {
            changeStatus(false);
            changeData('');
        }, 300);
    }

    function slide(type: 'LEFT' | 'RIGHT') {
        if (blockDoubleClick) {
            changeBlockDoubleClick(false);
            setTimeout(() => {
                changeBlockDoubleClick(true);
            }, 500);
            const gallery_slider: any = Array.from(document.getElementsByClassName('gallery_slider'));
            if (type === 'LEFT') {
                gallery_slider.map((slide_image: any) => {
                    slide_image.style.opacity = '1';
                    if (slide_image.style.left === '-100%') {
                        slide_image.style.opacity = '0';
                        slide_image.style.left = '100%';
                    } else {
                        slide_image.style.left = `${slide_image.style.left.split('%')[0] * 1 - 100}%`;
                    }
                });
            } else {
                gallery_slider.map((slide_image: any) => {
                    slide_image.style.opacity = '1';
                    if (slide_image.style.left === '100%') {
                        slide_image.style.opacity = '0';
                        slide_image.style.left = '-100%';
                    } else {
                        slide_image.style.left = `${slide_image.style.left.split('%')[0] * 1 + 100}%`;
                    }
                });
            }
        }
    }
};

export default Gallery;