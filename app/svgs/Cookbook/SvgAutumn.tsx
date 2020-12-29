import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.8336 21.9612L43.0734 21.2936L39.3934 9.6609C38.8906 8.07118 37.0544 7.34462 35.5998 8.1598L24.9562 14.1246L22.4869 12.7228C20.9502 11.8505 18.9994 12.5836 18.4175 14.2521C17.5503 16.7368 16.5077 20.5597 16.2104 25.174C15.6757 33.4734 25.563 35.0159 25.563 35.0159L28.3364 36.1134C28.3364 36.1134 36.6021 41.7542 41.8909 35.3356C44.8316 31.7672 46.6868 28.2662 47.7551 25.8606C48.4717 24.2456 47.5511 22.3765 45.8336 21.9612Z"
                fill="#FFA77B"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.3364 36.1146C28.3364 36.1146 35.4676 40.9801 40.7212 36.5288C38.472 34.2601 35.7613 30.5164 35.5386 25.511C35.2984 20.1167 32.0069 14.7946 29.5569 11.5466L24.9562 14.1262L22.4869 12.7244C20.9503 11.8521 18.9994 12.5852 18.4175 14.2537C17.5503 16.7384 16.5077 20.5613 16.2104 25.1755C15.6757 33.475 25.5627 35.0171 25.5627 35.0171L28.3364 36.1146Z"
                fill="#FF9161"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.0167 28.4175C40.0215 27.3387 39.1429 26.4517 38.0641 26.4466L30.3681 26.4114L24.7318 21.1713C23.9415 20.4367 22.6938 20.4821 21.9596 21.2724C21.2246 22.0623 21.2704 23.31 22.0603 24.0446L28.8183 30.3277L38.0458 30.3702C39.125 30.3749 40.0116 29.4964 40.0167 28.4175Z"
                fill="#B2785B"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3066 41.7301C23.3032 41.3331 22.8074 40.1876 23.2043 39.1842L31.603 17.959C32 16.9556 33.1459 16.4597 34.1489 16.8567C35.1523 17.2536 35.6482 18.3992 35.2512 19.4026L26.8525 40.6278C26.4556 41.6312 25.31 42.1271 24.3066 41.7301Z"
                fill="#C68D6D"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.3318 16.0844L25.5197 16.4796L17.8175 7.01669C16.765 5.7236 14.7904 5.7236 13.7379 7.01669L6.03578 16.4796L3.22365 16.0844C1.47389 15.8387 -0.0700542 17.2384 0.0024556 19.0039C0.110488 21.6336 0.547377 25.5715 1.96864 29.9715C4.52516 37.8857 14.2865 35.6819 14.2865 35.6819H17.2693C17.2693 35.6819 27.0303 37.8857 29.5868 29.9715C31.0081 25.5715 31.4453 21.6336 31.5534 19.0039C31.6255 17.238 30.0816 15.8387 28.3318 16.0844Z"
                fill="#FFBC97"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2863 35.6821H17.269C17.269 35.6821 24.2589 37.2594 27.958 32.9495C21.2684 32.5928 15.5889 24.2175 15.5889 24.2175C15.5889 24.2175 10.1089 32.2976 3.57495 32.9231C7.26819 37.2653 14.2863 35.6821 14.2863 35.6821Z"
                fill="#FFA77B"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.2986 24.228C24.906 23.2232 23.7627 22.7218 22.7578 23.114L15.5888 25.9126L8.4199 23.114C7.41465 22.7218 6.27134 23.2232 5.87913 24.228C5.48655 25.2333 5.98789 26.3766 6.99278 26.7688L15.5888 30.1244L24.1845 26.7688C25.1894 26.3766 25.6908 25.2333 25.2986 24.228Z"
                fill="#C68D6D"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5887 42.3875C14.5099 42.3875 13.627 41.5045 13.627 40.4257V17.599C13.627 16.5201 14.5095 15.6372 15.5887 15.6372C16.6676 15.6372 17.5502 16.5201 17.5502 17.599V40.4257C17.5502 41.5045 16.6676 42.3875 15.5887 42.3875Z"
                fill="#DD9F80"
            />
        </Svg>
    )
}

const SvgAmumu = React.memo(SvgComponent)
export default SvgAmumu