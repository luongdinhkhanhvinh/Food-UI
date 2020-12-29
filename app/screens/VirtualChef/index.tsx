import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
import dataVirtualChef, {
  Answer,
  TypeAnswer,
  TypeQuestionAnswer,
} from 'app/screens/VirtualChef/data';
import ListAnswer from 'app/screens/VirtualChef/components/ListAnswer';
import TimeCircleProgress from 'app/screens/VirtualChef/components/TimeCircleProgress';
import ChefList from 'app/screens/VirtualChef/components/ChefList';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import MessWithAvatar from 'app/screens/VirtualChef/components/MessWithAvatar';
import Mess from 'app/screens/VirtualChef/components/Mess';
import MessUser from 'app/screens/VirtualChef/components/MessUser';
import ModalDetail from 'app/screens/VirtualChef/components/ModalDetail';
import { createStackNavigator } from '@react-navigation/stack';
import FONTS from 'app/ultis/fonts';
import { widthScreen } from '../../ultis/layout';
import TimeProgressIos from './components/TimeProgressIos';

const VirtualChef = memo(() => {
  const scrollRef = useRef();
  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([dataVirtualChef[0]]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [dataUserChoice, setDataUserChoice] = useState<Answer[]>([]);
  const [showAnswer, setShow] = useState(false);
  const onChoice = useCallback(
    (item) => {
      let _dataChoice = [...dataUserChoice, item];
      let _data = [...data, item, dataVirtualChef[indexQuestion + 1]];
      // @ts-ignore
      setDataUserChoice(_dataChoice);
      setData(_data);
      setIndexQuestion(indexQuestion + 1);
      setShow(false);
    },
    [data, dataUserChoice, indexQuestion],
  );

  const onShowAnswer = useCallback((isTime) => {
    if (isTime) {
      setTimeout(() => {
        setShow(true);
      }, 1500);
    } else {
      setShow(true);
    }
  }, []);

  const renderAnswer = useCallback(
    (index, answer, typeAnswer) => {
      if (index === 0 && dataUserChoice[index]) {
        return;
      }
      if (typeAnswer === TypeAnswer.list) {
        return <ListAnswer data={answer} onPress={onChoice} />;
      }
      if (typeAnswer === TypeAnswer.calculation) {
        if (Platform.OS === 'android') {
          return <TimeCircleProgress onPress={onChoice} />;
        }
        if (Platform.OS === 'ios') {
          return <TimeProgressIos onPress={onChoice} />;
        }
      }
      if (typeAnswer === TypeAnswer.flatList) {
        return (
          <ChefList
            list={answer}
            onItem={() => {
              setVisible(true);
            }}
          />
        );
      }
      return null;
    },
    [dataUserChoice],
  );

  useEffect(() => {
    scrollRef.current.scrollToEnd();
  }, [data, dataUserChoice]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {data.map((item) => {
          let { questions, type } = item;
          if (type === TypeQuestionAnswer.question) {
            return (
              <>
                {questions.map((item, index) => {
                  if (item.withAvatar) {
                    return (
                      <MessWithAvatar
                        text={item.text}
                        key={index}
                        onShowAnswer={onShowAnswer}
                        continueMess={questions.length > 1}
                      />
                    );
                  }
                  return (
                    <Mess
                      text={item.text}
                      key={index}
                      continueMess={true}
                      onShowAnswer={onShowAnswer}
                    />
                  );
                })}
              </>
            );
          }
          return <MessUser text={item.text} />;
        })}
      </ScrollView>
      <View style={styles.answerView}>
        {showAnswer &&
          renderAnswer(
            indexQuestion,
            dataVirtualChef[indexQuestion].answers,
            dataVirtualChef[indexQuestion].typeAnswer,
          )}
      </View>
      {isVisible ? (
        <ModalDetail
          isVisibale={isVisible}
          onClose={() => {
            setVisible(false);
          }}
        />
      ) : null}
    </View>
  );
});

const Stack = createStackNavigator();
const StackVirtualChef = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'StackVirtualChef'}
        component={VirtualChef}
        options={{
          headerTitle: 'Virtual Chef',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '500',
            fontFamily: FONTS.Montserrat.Regular,
          },
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackVirtualChef;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: (widthScreen / 375) * 248 + 150,
    paddingTop: 24,
  },
  answerView: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
});
