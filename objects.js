var playlist = {artistname: 'song titles'};
function updatePlaylist (playlist, key, value){
  return Object.assign({}, playlist, {[key]:value})
}
function removeFromPlaylist (playlist, artistname){
  delete playlist.artistname;
  return playlist
}