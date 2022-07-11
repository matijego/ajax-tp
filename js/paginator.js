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
                        <th class="col border text-center"> <div class="imageBox">  <div> <img src="img/user.png" style="height: 25px;" /> </div> <div class="hoverImg "> <img class="rounded-circle" src="${user.avatar}" /> </div> </div> </th>
                        <th class="col border"><button class="btn btn-primary w-75 align-items-center" onclick="getPosts(${user.id}, '${user.first_name} ${user.last_name}')">Posts</th>
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
                
                <div class="col-1 text-center mt-2" >${post.id}</div>
                <div class="col-3 mt-2">${post.title}</div>
                <div class="col-5 mt-2">${post.body}</div>
                <div class="col-3 text-center"><button class="btn btn-primary w-75 mt-4" onclick="getComments(${post.id})">Comentarios</div>
                <div class="col-12 mt-2 p-2 border-bottom" id="postNro${post.id}"></div>
                   
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
        let allCommentaries = `
                        <div class="row text-center border border-primary">
                            <div class="col-3 border-right border-primary p-2">Nombre</div> 
                            <div class="col-3 border border-right border-primary p-2">Email</div> 
                            <div class="col-6 p-2">Comentario</div>                                                        
                        </div>
                            `;

        const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        const data = await fetch(url);
        const commentaries = await data.json();
        commentaries.map((comment, index) => (
           allCommentaries += `                                       
                                <div class="row p-2 border-bottom border-primary">
                                    <div class="col-3">${comment.name}</div> 
                                    <div class="col-3">${comment.email}</div> 
                                    <div class="col-6">${comment.body}</div>                                                        
                                </div>

           `
        ))
    
        document.getElementById(`postNro${id}`).innerHTML = allCommentaries;
    }else{
        document.getElementById(`postNro${id}`).innerHTML = '';
    }
}


getUsers(1);
