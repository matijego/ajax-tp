async function showAlbums(id) {
    try{
        const url = `https://jsonplaceholder.typicode.com/users/${id}/albums`;
        let userAlbums = '<h2> Albums </h2>';
        const data = await fetch(url);
        const albums = await data.json();
        albums.map((album, index) => (
            userAlbums += `
                    <div class="link-container" style="width: 20%;">
                        <p class="text-center border p-2" style="height: 100px;" onclick="showPhotos(${album.id})" > ${album.title} </p>
                    </div>           
            `
        ));
        document.getElementById("albums").innerHTML = userAlbums;
        document.getElementById("photos").innerHTML = '';


    }catch(err){
        console.log(err);
    }
}