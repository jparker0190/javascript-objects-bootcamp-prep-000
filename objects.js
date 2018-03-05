var playlist = {artist name: 'song titles'};
function updatePlaylist(obj, key, value){
  return Object.assign({}, obj,{[key]:value})
}