async function getAlbums() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        const albums = await response.json();
        const first20 = albums.slice(0, 20);
        first20.forEach(album => console.log(album.id, " - ", album.title));
    } catch (error) {
        console.log(error);
    }
}

const sendMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
};

const showMessage = async () => {
    try {
        const albumsPromise = getAlbums();
        const messagePromise = sendMessage();
        await Promise.all([albumsPromise, messagePromise]);
        console.log("Información enviada");
    } catch (error) {
        console.error("Error:", error);
    }
};

showMessage();
