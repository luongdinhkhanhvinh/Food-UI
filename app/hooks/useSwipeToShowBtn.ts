import { add, cond, eq, set, useCode, Value } from 'react-native-reanimated';
import { clamp, snapPoint, timing } from 'react-native-redash';
import { State } from 'react-native-gesture-handler';
import { useMemo } from 'react';

const useSwipeToShowBtn = (
  snapPoints: number[],
  translation: any,
  velocity: any,
  state: any,
  horizontal?: boolean,
): [any] => {
  const isHorizontal = horizontal ? new Value(1) : new Value(0);
  const trans = useMemo(() => new Value(0), []);
  const offsetState = useMemo(() => new Value(0), []);
  const to = useMemo(
    () =>
      snapPoint(trans, cond(isHorizontal, velocity.y, velocity.x), snapPoints),
    [],
  );

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(
          trans,
          clamp(
            add(offsetState, cond(isHorizontal, translation.y, translation.x)),
            snapPoints[0],
            0,
          ),
        ),
      ),
      cond(eq(state, State.END), [
        set(trans, timing({ from: trans, to })),
        set(offsetState, trans),
      ]),
    ],
    [],
  );

  return [trans];
};

export default useSwipeToShowBtn;
