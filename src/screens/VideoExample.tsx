/*
 * Demo of react-native-video usage for Apple TV and Android TV
 */

import React from 'react';
import {Platform, StyleSheet, View, useTVEventHandler} from 'react-native';
import Video from 'react-native-video';

import {
  Button,
  ProgressBar,
  SectionContainer,
} from '../common/StyledComponents';
import useNavigationFocus from '../navigation/useNavigationFocus';

const VideoExample = React.forwardRef(
  ({navigation}: {navigation: any}, ref: React.ForwardedRef<any>) => {
    const [volume, setVolume] = React.useState(1.0);
    const [duration, setDuration] = React.useState(0.0);
    const [currentTime, setCurrentTime] = React.useState(0.0);
    const [paused, setPaused] = React.useState(true);

    const [hasNavigationFocus, setHasNavigationFocus] = React.useState(false);

    useNavigationFocus(navigation, setHasNavigationFocus);

    const players: any = {};

    useTVEventHandler(evt => {
      if (evt && evt.eventType === 'playPause') {
        setPaused(!paused);
      }
    });

    const onLoad = (data: any) => {
      setDuration(data.duration);
    };

    const onProgress = (data: any) => {
      setCurrentTime(data.currentTime);
    };

    const currentTimePercentage = () =>
      currentTime > 0 ? currentTime / duration : 0;

    return (
      <SectionContainer title="Video example">
        <View style={styles.videoContainer}>
          <View>
            <Video
              ref={(r: Video) => (players[ref] = r)}
              source={require('../../assets/bach-handel-corelli.mp4')}
              style={styles.video}
              rate={1}
              volume={volume}
              muted={false}
              paused={paused}
              onLoad={onLoad}
              onProgress={onProgress}
              onEnd={() => {}}
              repeat
              resizeMode="contain"
            />
            <ProgressBar fractionComplete={currentTimePercentage()} />
          </View>
          <View style={styles.generalControls}>
            <Button
              hasTVPreferredFocus={hasNavigationFocus}
              onPress={() => setPaused(!paused)}>
              {paused ? 'Play' : 'Pause'}
            </Button>
            <Button onPress={() => players[ref].seek(0)}>Rewind</Button>
            <Button onPress={() => setVolume(0.0)}>No volume</Button>
            <Button onPress={() => setVolume(0.5)}>Half volume</Button>
            <Button onPress={() => setVolume(1.0)}>Full volume</Button>
          </View>
        </View>
      </SectionContainer>
    );
  },
);

export default VideoExample;

const styles = StyleSheet.create({
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  video: {
    width: Platform.OS === 'android' ? 640 : 1280,
    height: Platform.OS === 'android' ? 360 : 720,
  },
  generalControls: {},
});
