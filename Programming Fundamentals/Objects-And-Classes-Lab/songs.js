function songs(songsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    songsArr.shift();
    let requieredType = songsArr.pop();
    for (let currSong of songsArr) {
        let songData = currSong.split(`_`);
        let song = new Song(songData[0], songData[1], songData[2]);
        if (song.typeList === requieredType || requieredType === `all`) {
            console.log(song.name);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);