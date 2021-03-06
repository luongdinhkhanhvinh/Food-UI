import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
        fill="#1DA1F2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.165 18.728a8.19 8.19 0 01-1.343.415c.508-.442.89-.996 1.106-1.614.061-.176-.148-.328-.322-.234a8.148 8.148 0 01-2.053.777.573.573 0 01-.488-.111A4.425 4.425 0 0027.289 17c-.444 0-.891.063-1.33.188-1.362.388-2.412 1.417-2.742 2.688a3.774 3.774 0 00-.1 1.417.132.132 0 01-.037.108.163.163 0 01-.131.048c-2.98-.254-5.668-1.57-7.567-3.707a.231.231 0 00-.36.025 3.606 3.606 0 00-.568 1.936c0 1.044.457 2.027 1.252 2.745a3.974 3.974 0 01-.958-.34c-.146-.075-.324.02-.326.173-.021 1.55.969 2.93 2.452 3.551l-.09.001c-.235 0-.473-.02-.707-.062-.164-.028-.301.114-.25.26.481 1.378 1.775 2.393 3.323 2.624a8.254 8.254 0 01-4.339 1.208h-.486c-.15 0-.276.09-.314.222-.037.131.032.27.16.337a12.335 12.335 0 005.79 1.432c1.78 0 3.445-.324 4.948-.963a10.903 10.903 0 003.621-2.487c.954-.993 1.7-2.138 2.217-3.405a9.97 9.97 0 00.754-3.726v-.06c0-.197.097-.383.267-.51a7.899 7.899 0 001.67-1.68c.122-.167-.07-.377-.272-.295z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgTwitter = React.memo(SvgComponent);
export default SvgTwitter;
