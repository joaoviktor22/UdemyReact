export const selectSong = song => {
    //return ana action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};

