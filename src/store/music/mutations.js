export default {
  changeMusicId(state, id) {
    state.musicId = id;
  },
  getRadio(state, item) {
    state.radio = item;
  },
  getlists(state, lists) {
    state.lists = lists;
  },
  initMusicData:(state,data)=>{
    state.musicData=data;
  },
  show:state=>{
    state.isShow=true;
  }
}
