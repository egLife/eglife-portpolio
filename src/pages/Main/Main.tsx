// LIB
import * as React from 'react';

// LANG
import { lang } from '@app/config';
// Store
import { history } from '@app/store';
// IMAGE
import Background from '@assets/images/main_background.jpg';
// CONTAINER
import { MainContainerProps } from './MainContainer';
// SCSS
import './Main.scss';

type MainPropsInterface = {} & MainContainerProps;
type MainStateInterface = {
  text: string
};

export default class Main extends React.Component<MainPropsInterface, MainStateInterface> {
  private mainRef: React.RefObject<HTMLDivElement> = React.createRef();
  private mainContentRef: React.RefObject<HTMLDivElement> = React.createRef();
  private mainImageRef: React.RefObject<HTMLImageElement> = React.createRef();
  private mainLiLogoRef: React.RefObject<HTMLLIElement> = React.createRef();
  private mainLiButtonRef: React.RefObject<HTMLLIElement> = React.createRef();
  private mainButtonRef: React.RefObject<HTMLButtonElement> = React.createRef();
  private typingTimer: NodeJS.Timer | number = null;

  constructor(props: MainPropsInterface) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      // Start animation
      this.mainImageRef.current.style.filter = 'brightness(0.4)';
      this.mainLiLogoRef.current.style.opacity = '1';
      this.mainLiButtonRef.current.style.opacity = '1';

      this.setState({
        text: this.state.text.concat(lang.MAIN.TITLE[this.state.text.length])
      });
    }, 50);
  }

  componentDidUpdate(nextProps: any, nextState: any) {
    // Input title to this.state.text variable
    if (nextState.text !== lang.MAIN.TITLE && nextState.text.length < lang.MAIN.TITLE.length) {
      this.typingTimer = setTimeout(() => {
        if (lang.MAIN.TITLE[this.state.text.length] === undefined) {
          clearTimeout(this.typingTimer as NodeJS.Timer);
          this.typingTimer = null;
        } else {
          this.setState({
            text: this.state.text.concat(lang.MAIN.TITLE[this.state.text.length])
          });
        }
      }, 50);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.typingTimer as NodeJS.Timer);
    this.typingTimer = null;
  }

  render() {
    return (
      <div id='main' ref={this.mainRef}>
        {
          // background image for main component
        }
        <div className='main__backgroundImage' ref={this.mainImageRef}
          style={{
            backgroundImage: `url('${Background}')`
          }}
        />
        {
          // content for main component
        }
        <div className='main__content' ref={this.mainContentRef}>
          <ul>
              {
                // typing title span tag
              }
              <li>
                <b>
                  <span>{this.state.text.split('"').length > 0 ? this.state.text.split('"')[0] : null}</span>
                  <span><strong style={{
                    color: this.props.temaColor
                  }}>{this.state.text.split('"').length > 1 ? this.state.text.split('"')[1] : null}</strong>
                    {this.state.text.split('"').length > 2 ? this.state.text.split('"')[2] : null}
                  </span>
                </b>
              </li>
              {
                // sub title span tag
              }
              <li ref={this.mainLiLogoRef}><span style={{
                  color: this.props.temaColor
                }}>{lang.MAIN.SUB_TITLE}</span></li>
              {
                // Create button tag
              }
              <li ref={this.mainLiButtonRef}>
                <button
                  ref={this.mainButtonRef}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  onClick={this.showDetail}
                  style={{
                      borderColor: this.props.temaColor
                    }}>{lang.MAIN.BUTTON}
                </button>
              </li>
          </ul>
        </div>
      </div>
    );
  }

  /**
   * Change history for show detail component
   * Change height, top for animation
   */
  showDetail() {
    this.mainRef.current.style.overflow = 'hidden';
    this.mainImageRef.current.style.minHeight = '0';
    this.mainRef.current.style.height = '0';
    this.mainRef.current.style.top = '50%';
    this.mainContentRef.current.style.opacity = '0';

    // Go to Detail component
    setTimeout(() => {
      history.push('/menu');
    }, 1500);
  }

  /**
   * Mouse Over
   * button:hover change color
   */
  handleMouseEnter() {
    this.mainButtonRef.current.style.backgroundColor = this.props.temaColor;
  }

  /**
   * Mouse Leave
   * no button:hover change color
   */
  handleMouseLeave() {
    this.mainButtonRef.current.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
