import React, { Component } from 'react';
import {
  PanResponder,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Svg, {
  Path,
  Circle,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import SvgClock from '../../svgs/VirtualChef/SvgClock';
import FONTS from '../../ultis/fonts';

export default class CircleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: this.props.value,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => true,
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        let xOrigin =
          this.props.xCenter - (this.props.dialRadius + this.props.btnRadius);
        let yOrigin =
          this.props.yCenter - (this.props.dialRadius + this.props.btnRadius);
        let a = this.cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

        if (a <= this.props.min) {
          this.setState({ angle: this.props.min });
        } else if (a >= this.props.max) {
          this.setState({ angle: this.props.max });
        } else {
          this.setState({ angle: a });
        }
      },
    });
  }

  polarToCartesian(angle) {
    let r = this.props.dialRadius;
    let hC = this.props.dialRadius + this.props.btnRadius;
    let a = ((angle - 90) * Math.PI) / 180.0;

    let x = hC + r * Math.cos(a);
    let y = hC + r * Math.sin(a);
    return { x, y };
  }

  cartesianToPolar(x, y) {
    let hC = this.props.dialRadius + this.props.btnRadius;

    if (x === 0) {
      return y > hC ? 0 : 180;
    } else if (y === 0) {
      return x > hC ? 90 : 270;
    } else {
      return (
        Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
        (x > hC ? 90 : 270)
      );
    }
  }

  render() {
    let width = (this.props.dialRadius + 21) * 2;
    let bR = this.props.btnRadius;
    let dR = this.props.dialRadius;
    let startCoord = this.polarToCartesian(0);
    let endCoord = this.polarToCartesian(this.state.angle);

    return (
      <View style={{ backgroundColor: 'transparent' }}>
        <Svg width={width}>
          <Svg width={width} height={width}>
            <Circle
              r={dR}
              cx={width / 2}
              cy={width / 2}
              stroke={this.props.strokeColor}
              strokeWidth={this.props.strokeWidth}
              fill={this.props.fillColor}
            />

            <Path
              stroke={this.props.meterColor}
              strokeWidth={this.props.dialWidth}
              fill="none"
              strokeLinecap="round"
              d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
                this.state.angle > 180 ? 1 : 0
              } 1 ${endCoord.x} ${endCoord.y}`}
            />

            <G x={endCoord.x - 21} y={endCoord.y - 21}>
              <Path
                d="M35.5 19C35.5 10.9919 29.0081 4.5 21 4.5C12.9919 4.5 6.5 10.9919 6.5 19C6.5 27.0081 12.9919 33.5 21 33.5C29.0081 33.5 35.5 27.0081 35.5 19Z"
                fill="#FE9870"
                stroke="white"
                strokeWidth={3}
                {...this._panResponder.panHandlers}
              />
            </G>
          </Svg>
        </Svg>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginLeft: -12,
          }}
          onPress={() => {
            this.props.onTakeValue(
              Math.ceil(
                (this.props.onValueChange(this.state.angle) / 360) * 60,
              ),
            );
          }}>
          <Svg width={80} height={32}>
            <G>
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16C0 7.16344 7.16344 0 16 0H64C72.8366 0 80 7.16344 80 16C80 24.8366 72.8366 32 64 32H16C7.16344 32 0 24.8366 0 16Z"
                fill="url(#paint0_linear)"
              />
              <Path
                d="M23.1531 14.024C22.8571 13.68 22.5051 13.412 22.0971 13.22C21.6971 13.028 21.2891 12.932 20.8731 12.932C20.3531 12.932 19.8771 13.056 19.4451 13.304C19.0131 13.552 18.6731 13.896 18.4251 14.336C18.1771 14.768 18.0531 15.244 18.0531 15.764C18.0531 16.284 18.1771 16.764 18.4251 17.204C18.6731 17.636 19.0131 17.98 19.4451 18.236C19.8771 18.484 20.3531 18.608 20.8731 18.608C21.2731 18.608 21.6731 18.52 22.0731 18.344C22.4811 18.168 22.8411 17.924 23.1531 17.612L24.1011 18.668C23.6611 19.116 23.1491 19.472 22.5651 19.736C21.9811 19.992 21.3891 20.12 20.7891 20.12C19.9811 20.12 19.2411 19.928 18.5691 19.544C17.8971 19.16 17.3691 18.64 16.9851 17.984C16.6011 17.32 16.4091 16.588 16.4091 15.788C16.4091 14.988 16.6051 14.26 16.9971 13.604C17.3891 12.948 17.9211 12.432 18.5931 12.056C19.2731 11.68 20.0251 11.492 20.8491 11.492C21.4491 11.492 22.0371 11.612 22.6131 11.852C23.1891 12.092 23.6811 12.424 24.0891 12.848L23.1531 14.024ZM28.0085 13.532C28.6725 13.532 29.2565 13.668 29.7605 13.94C30.2725 14.212 30.6685 14.596 30.9485 15.092C31.2365 15.58 31.3805 16.144 31.3805 16.784C31.3805 17.432 31.2365 18.004 30.9485 18.5C30.6685 18.996 30.2725 19.38 29.7605 19.652C29.2565 19.924 28.6725 20.06 28.0085 20.06C27.3365 20.06 26.7445 19.924 26.2325 19.652C25.7205 19.38 25.3205 18.996 25.0325 18.5C24.7525 18.004 24.6125 17.432 24.6125 16.784C24.6125 16.144 24.7525 15.58 25.0325 15.092C25.3205 14.596 25.7205 14.212 26.2325 13.94C26.7445 13.668 27.3365 13.532 28.0085 13.532ZM28.0085 14.864C27.4645 14.864 27.0245 15.044 26.6885 15.404C26.3525 15.764 26.1845 16.232 26.1845 16.808C26.1845 17.384 26.3525 17.852 26.6885 18.212C27.0245 18.572 27.4645 18.752 28.0085 18.752C28.5365 18.752 28.9685 18.572 29.3045 18.212C29.6405 17.852 29.8085 17.384 29.8085 16.808C29.8085 16.232 29.6405 15.764 29.3045 15.404C28.9685 15.044 28.5365 14.864 28.0085 14.864ZM36.5997 13.52C37.3357 13.52 37.9157 13.744 38.3397 14.192C38.7637 14.632 38.9757 15.232 38.9757 15.992V20H37.4037V16.448C37.4037 16 37.2757 15.648 37.0197 15.392C36.7637 15.128 36.4157 14.996 35.9757 14.996C35.4557 15.004 35.0437 15.18 34.7397 15.524C34.4437 15.868 34.2957 16.308 34.2957 16.844V20H32.7357V13.58H34.2957V14.78C34.7357 13.956 35.5037 13.536 36.5997 13.52ZM43.4039 12.368C43.1639 12.368 42.9639 12.436 42.8039 12.572C42.6519 12.708 42.5759 12.912 42.5759 13.184V13.844H44.1839V14.984H42.5759V20H41.0159V14.984H40.1759V13.844H41.0159V13.232C41.0159 12.76 41.1199 12.36 41.3279 12.032C41.5359 11.696 41.8119 11.444 42.1559 11.276C42.5079 11.108 42.8879 11.024 43.2959 11.024C43.6959 11.024 44.0879 11.116 44.4719 11.3L44.1959 12.56C43.8759 12.432 43.6119 12.368 43.4039 12.368ZM45.1079 13.58H46.6679V20H45.1079V13.58ZM45.8759 10.82C46.1319 10.82 46.3439 10.908 46.5119 11.084C46.6799 11.26 46.7639 11.484 46.7639 11.756C46.7639 12.02 46.6799 12.24 46.5119 12.416C46.3439 12.592 46.1319 12.68 45.8759 12.68C45.6199 12.68 45.4079 12.592 45.2399 12.416C45.0719 12.24 44.9879 12.02 44.9879 11.756C44.9879 11.484 45.0719 11.26 45.2399 11.084C45.4079 10.908 45.6199 10.82 45.8759 10.82ZM50.1629 14.816C50.3789 14.4 50.6709 14.084 51.0389 13.868C51.4149 13.644 51.8509 13.528 52.3469 13.52V15.032C51.6829 14.992 51.1509 15.148 50.7509 15.5C50.3589 15.844 50.1629 16.312 50.1629 16.904V20H48.6029V13.58H50.1629V14.816ZM61.8547 13.52C62.5827 13.52 63.1547 13.744 63.5707 14.192C63.9867 14.632 64.1947 15.232 64.1947 15.992V20H62.6227V16.448C62.6227 15.992 62.4947 15.636 62.2387 15.38C61.9907 15.116 61.6507 14.984 61.2187 14.984C60.7227 15 60.3267 15.18 60.0307 15.524C59.7427 15.868 59.5987 16.304 59.5987 16.832V20H58.0267V16.448C58.0267 15.992 57.9027 15.636 57.6547 15.38C57.4067 15.116 57.0667 14.984 56.6347 14.984C56.1307 15 55.7307 15.18 55.4347 15.524C55.1467 15.868 55.0027 16.304 55.0027 16.832V20H53.4427V13.58H55.0027V14.768C55.4267 13.952 56.1787 13.536 57.2587 13.52C57.8187 13.52 58.2867 13.656 58.6627 13.928C59.0467 14.192 59.3147 14.568 59.4667 15.056C59.8747 14.048 60.6707 13.536 61.8547 13.52Z"
                fill="white"
              />
              <Defs>
                <LinearGradient
                  id="paint0_linear"
                  x1={80}
                  y1={0}
                  x2={0}
                  y2={0}
                  gradientUnits="userSpaceOnUse">
                  <Stop stopColor="#82D84E" />
                  <Stop offset={1} stopColor="#0EAD69" />
                </LinearGradient>
              </Defs>
            </G>
          </Svg>
        </TouchableOpacity>
        <View
          style={{ position: 'absolute', top: 9.5, left: 9.5, zIndex: -100 }}>
          <SvgClock />
        </View>
        <View
          style={{
            position: 'absolute',
            top: width / 2 - 36,
            left: width / 2 - 24,
            zIndex: 100,
            width: 36,
          }}>
          <Text
            style={{
              fontFamily: FONTS.DINCondensed.Bold,
              fontSize: 48,
              textAlign: 'center',
            }}>
            {Math.ceil((this.props.onValueChange(this.state.angle) / 360) * 60)}
          </Text>
        </View>
      </View>
    );
  }
}

CircleSlider.defaultProps = {
  btnRadius: 15,
  dialRadius: 130,
  dialWidth: 5,
  meterColor: '#0cd',
  textColor: '#fff',
  fillColor: 'none',
  strokeColor: '#fff',
  strokeWidth: 0.5,
  textSize: 10,
  value: 0,
  min: 0,
  max: 359,
  xCenter: Dimensions.get('window').width / 2,
  yCenter: Dimensions.get('window').height / 2,
  onValueChange: (x) => x,
};
