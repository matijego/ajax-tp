async function getdata() {
    try{
        let username = '';
        const url = 'https://jsonplaceholder.typicode.com/users';
        const data = await fetch(url);
        const users = await data.json();
        users.map((user, index) => (
           username += `
                    <tr>
                        <th class="col-1 border">${user.id}</th>
                        <th class="col-2 border">${user.name}</th>
                        <th class="col-2 border">${user.username}</th>
                        <th class="col-2 border">${user.email}</th>
                        <th class="col-3 border">${user.address.city}, ${user.address.street}, ${user.address.suite} - ${user.address.zipcode}</th>
                        <th class="col-1 border">${user.company.name}</th>
                        <th class="col-1 border"><button class="btn btn-primary" onclick="showAlbums(${user.id})">Album</button></th>
                    </tr>
           `
        ))
        document.getElementById("userTable").innerHTML = username

    }catch(err){
        console.log(err);
    }
};

getdata();
