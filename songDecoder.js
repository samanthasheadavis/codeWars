function songDecoder(song){
  var original = song.replace(/wub/gi, ' ');
  return original.split(' ').filter(String).join(' ');

}

songDecoder("WUBAWUBBWUBCWUB");
// songDecoder("WUBWUBIWUBAMWUBWUBX");
