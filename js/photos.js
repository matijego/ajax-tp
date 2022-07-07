async function showPhotos(id) {
    try {
        console.log('Este es el ID:' + id);
        const url = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
        let albumPhotos = '<h2> Imágenes </h2>';
        const data = await fetch(url);
        const photos = await data.json();
        photos.map((photo, index) => (
            albumPhotos += `
                    <div style="width: 20%;" class="mb-2">
                        <img src="${photo.thumbnailUrl}" data-toggle="modal" data-target="#exampleModalCenter" onclick="modalPhoto('${photo.url}')" />
                    </div>
            `
        ));
        document.getElementById("photos").innerHTML = albumPhotos;
    }catch(err){
        console.log(err);
    }
}

function modalPhoto(imgUrl) {
    console.log('toy en modal photo')
    const image = `<img class="img-fluid" src="${imgUrl}" />`
    console.log(image)
    document.getElementById("picture").innerHTML = image;
}