var playlist = {artistname: 'song titles'};
function updatePlaylist (obj, key, value){
  return Object.assign({}, obj,{[key]:value})
}