import * as React from 'react';
import {useContext} from 'react';

import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import * as Animatable from 'react-native-animatable';
import WeatherSearchBar from '../../components/SearchBar';
import {ThemeContext} from '../../hooks/useTheme';
import styles from './HomeScreen.style';
import RedhaCard from '../../components/RedhaCard/RedhaCard';

const mapStateToProps = (state) => ({
  hasCity: state.data.hasCity,
});

function HomeScreen() {
  const {theme}: any = useContext(ThemeContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView
        style={{...styles.safeArea, backgroundColor: theme.primary}}>
        <View style={styles.mainView}>
          <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
            <View style={styles.titleContainer}>
              <Animatable.Text
                animation='slideInLeft'
                easing='ease'
                useNativeDriver
                style={{...styles.titleTextStyle, color: theme.text}}>
                Relative Weather
              </Animatable.Text>
            </View>
            <WeatherSearchBar />
          </View>
        </View>
        <RedhaCard />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default connect(mapStateToProps)(HomeScreen);
