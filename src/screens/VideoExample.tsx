/*
 * Demo of react-native-video usage for Apple TV and Android TV
 */

import {
  Video,
  ResizeMode,
  AVPlaybackStatus,
  VideoFullscreenUpdate,
} from 'expo-av';
import React from 'react';
import {Platform, StyleSheet, View, useTVEventHandler} from 'react-native';

import {
  Button,
  ProgressBar,
  SectionContainer,
} from '../common/StyledComponents';
import useNavigationFocus from '../navigation/useNavigationFocus';

type Status = Partial<AVPlaybackStatus> & {
  isPlaying?: boolean;
  uri?: string;
  rate?: number;
  positionMillis?: number;
  playableDurationMillis?: number;
};

const VideoExample = ({navigation}: {navigation: any}) => {
  const video = React.useRef<Video>();

  const [status, setStatus] = React.useState<Status>({
    isPlaying: false,
  });
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const progress =
    status.playableDurationMillis !== undefined &&
    status.positionMillis !== undefined
      ? status.positionMillis / status.playableDurationMillis
      : 0;

  const [hasNavigationFocus, setHasNavigationFocus] = React.useState(false);

  useNavigationFocus(navigation, setHasNavigationFocus);

  useTVEventHandler(evt => {
    if (evt && evt.eventType === 'playPause') {
      playPause();
    }
  });

  const playPause = () =>
    status?.isPlaying ?? false
      ? video.current.pauseAsync()
      : video.current.playAsync();

  const adjustVolume = (volume: number) => {
    video.current.setVolumeAsync(volume);
  };

  return (
    <SectionContainer title="Video example">
      <View style={styles.videoContainer}>
        <View>
          <Video
            ref={video}
            style={isFullScreen ? {display: 'none'} : styles.video}
            source={require('../../assets/bach-handel-corelli.mp4')}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            useNativeControls={false}
            onPlaybackStatusUpdate={newStatus => {
              setStatus(_status => newStatus);
            }}
            onFullscreenUpdate={event => {
              if (
                event.fullscreenUpdate ===
                VideoFullscreenUpdate.PLAYER_WILL_PRESENT
              ) {
                setIsFullScreen(true);
              }
              if (
                event.fullscreenUpdate ===
                VideoFullscreenUpdate.PLAYER_DID_DISMISS
              ) {
                setIsFullScreen(false);
              }
            }}
          />
          <ProgressBar fractionComplete={progress} />
        </View>
        <View style={styles.generalControls}>
          <Button hasTVPreferredFocus={hasNavigationFocus} onPress={playPause}>
            {status.isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Button onPress={() => video.current.replayAsync()}>Rewind</Button>
          <Button onPress={() => adjustVolume(0.0)}>No volume</Button>
          <Button onPress={() => adjustVolume(0.5)}>Half volume</Button>
          <Button onPress={() => adjustVolume(1.0)}>Full volume</Button>
          <Button onPress={() => video.current.presentFullscreenPlayer()}>
            Full screen
          </Button>
        </View>
      </View>
    </SectionContainer>
  );
};

export default VideoExample;

const styles = StyleSheet.create({
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  video: {
    width: Platform.OS === 'android' ? 640 : 960,
    height: Platform.OS === 'android' ? 360 : 640,
  },
  generalControls: {},
});
