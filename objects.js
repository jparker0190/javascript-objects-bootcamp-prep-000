var playlist = {artistName: 'song titles'};
function updatePlaylist (playlist, key, value){
  return Object.assign({}, playlist, {[key]:value})
}
function removeFromPlaylist (playlist, artistName){
  var joe = delete playlist.artistName;
  return joe
}