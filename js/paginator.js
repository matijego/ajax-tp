async function getUsers(id) {
    try{
        let username = '';
        const url = `https://reqres.in/api/users?page=${id}`;
        const data = await fetch(url);
        const users = await data.json();
        users.data.map((user, index) => (
           username += `
                    <tr>
                        <th class="col border" >${user.id}</th>
                        <th class="col border">${user.first_name}</th>
                        <th class="col border">${user.last_name}</th>
                        <th class="col border">${user.email}</th>
                        <th class="col border text-center"> <img src="img/user.png" style="height: 25px;" /></th>
                        <th class="col border text-center"><button class="btn btn-primary w-75" onclick="getPosts(${user.id}, '${user.first_name} ${user.last_name}')">Posts</th>
                    </tr>
           `
        ))
        document.getElementById("paginator").innerHTML = username

    }catch(err){
        console.log(err);
    }
};

async function getPosts(id, name){
    let allPosts = '';
    const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
    const data = await fetch(url);
    const posts = await data.json();
    posts.map((post, index) => (
       allPosts += `
                
                <div class="col-1" >${post.id}</div>
                <div class="col-3">${post.title}</div>
                <div class="col-5">${post.body}</div>
                <div class="col-3 text-center"><button class="btn btn-primary w-75" onclick="getComments(${post.id})">Comentarios</div>
                
                
                <div class="col-12 text-center border" id="postNro${post.id}"></div>
                   
       `
    ))
    document.getElementById("posts").innerHTML = allPosts
    document.getElementById("username").innerHTML = name;

}

async function getComments(id) {
    //Verifica si el div está vacío
    const commentContainer = $(`#postNro${id}`).is(':empty');
    console.log(commentContainer)
    if (commentContainer == true){
        document.getElementById(`postNro${id}`).innerHTML = 'hola';
    }else{
        document.getElementById(`postNro${id}`).innerHTML = '';
    }
}


getUsers(1);
