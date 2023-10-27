window.onload = () => {
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');
    const audio_player = document.getElementById('music-player');

    let current_song_index;
    let next_song_index;
    let songs = [
        {
            title: 'Rap do Minecraft',
            artist: 'Por BngOficial',
            song_path: './music/RAP DO MINECRAFT ♫.mp3',
            img_path: './assets/images/minecraft.jpg'
        },
        {
            title: '',   
            artist: 'Por ',
            song_path: 'music/',
            img_path: './assets/images/'
        },
        {
            title: '',
            artist: '',
            song_path: 'music/',
            img_path: './assets/images/'
        }
    ];

    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer() {
        // Inicialize o índice atual de forma aleatória
        current_song_index = getRandomIndex(songs.length);
        next_song_index = getRandomIndex(songs.length);
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];
        song_img_el.style = "background-image: url('" + song.img_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;
        song_next_up_el.innerText = songs[next_song_index].title + " - " + songs[next_song_index].artist;
        audio_player.src = song.song_path;
    }

    function TogglePlaySong() {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true) {
        if (next) {
            current_song_index = getRandomIndex(songs.length);
        } else {
            current_song_index = getRandomIndex(songs.length);
        }
        next_song_index = getRandomIndex(songs.length);
        UpdatePlayer();
        TogglePlaySong();
    }

    function getRandomIndex(max) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * max);
        } while (randomIndex === current_song_index);
        return randomIndex;
    }
}