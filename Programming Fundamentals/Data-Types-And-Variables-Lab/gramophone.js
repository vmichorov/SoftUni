function gramophone(par1, par2, par3) {
    let bandName = par1;
    let albumName = par2;
    let songName = par3;
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');