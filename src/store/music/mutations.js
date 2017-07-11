export default {
  initMusicData: (state, data) => {
    state.musicData = data;
  },
  done: state => {
    state.isDone = true;
  },
  updataPlayListDetail: (state, {
    playList,
    privileges
  }) => {
    state.playList = playList;
    state.privileges = privileges;
  }
}
