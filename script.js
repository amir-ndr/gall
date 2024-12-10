document.addEventListener("DOMContentLoaded", () => {
    const photos = [
        { src: "Photos/Aurora.jpg", caption: "Caption for Photo 1", music: "spotify-link-1" },
        { src: "Photos/Toronto.jpg", caption: "Caption for Photo 2", music: "spotify-link-2" },
    ];

    const gallery = document.querySelector('.gallery');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.addEventListener('click', () => {
            window.location.href = `photo.html?src=${photo.src}&caption=${encodeURIComponent(photo.caption)}&music=${photo.music}`;
        });
        gallery.appendChild(img);
    });

    document.getElementById('surprise-me').addEventListener('click', () => {
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        window.location.href = `photo.html?src=${randomPhoto.src}&caption=${encodeURIComponent(randomPhoto.caption)}&music=${randomPhoto.music}`;
    });

    document.getElementById('play-music').addEventListener('click', () => {
        const spotifyLink = document.getElementById('spotify-link').value;
        if (spotifyLink) {
            window.open(spotifyLink, '_blank');
        }
    });
});
