const addForm = document.getElementById("add-user-form");
const updateForm = document.getElementById("edit-user-form");
const showAlert = document.getElementById("showAlert");
const addModal = new bootstrap.Modal(document.getElementById("addNewUserModal"));
const editModal = new bootstrap.Modal(document.getElementById("editUserModal"));
const tbody = document.querySelector("tbody");

// const $ = document.querySelector.bind
// Add New User Ajax Request
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(addForm);
  formData.append("add", 1);

  if (addForm.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
    addForm.classList.add("was-validated");
    return false;
  } else {
    document.getElementById("add-user-btn").value = "Please Wait...";

    const data = await fetch("server.php", {
      method: "POST",
      body: formData,
      headers: { 'Content-Type': 'application/json'}
    });
  
    document.getElementById("add-user-btn").value = "Add User";
    addForm.reset();
    addForm.classList.remove("was-validated");
    addModal.hide();
    fetchAllUsers(getMusc);
  }
});

// Fetch All Users Ajax Request
function fetchAllUsers(callback){
    fetch('http://localhost/myskil/reshful-api/api/music/showDv.php').then(function(response){
        return response.json();
    }).then(callback)
};
fetchAllUsers(getMusc);

function getMusc(music){
    var listMusicBlock = document.querySelector('tbody');
        var htmls = music.map(function(mus){
            return `
                <tr>
                <td>${mus.id}</td>
                <td>${mus.name_singer}</td>
                <td>${mus.name_song}</td>
                <td>${mus.id_playlist}</td>
                <td>${mus.audio}</td>
                <td>${mus.image}</td>
                </tr>
            `;
        })
        listMusicBlock.innerHTML = htmls.join('');
}

// var add = document.querySelector('#add-user-form');

// add.on('submit', function(event){
//     event.preventDefault();
    
//     var form_dt = $(this).serialize();
//     console.log(form_dt);
//     $.ajax({
//         url:"../php/action.php",
//         method:"POST",
//         data:form_dt,
//         success:function(data)
//         {
//         $('#add-user-form')[0].reset();
       
//         if(data == 'newMusic')
//         {
//             alert("Create new account successfully");
//             fetchAllUsers(getMusc);
//         }
//         if(data == 'update')
//         {
//         alert("Data Updated using PHP API");
//         }
//         }
//     });
    
// });

// Edit User Ajax Request
// tbody.addEventListener("click", (e) => {
//   if (e.target && e.target.matches("a.editLink")) {
//     e.preventDefault();
//     let id = e.target.getAttribute("id");
//     editUser(id);
//   }
// });

// const editUser = async (id) => {
//   const data = await fetch(`action.php?edit=1&id=${id}`, {
//     method: "GET",
//   });
//   const response = await data.json();
//   document.getElementById("id").value = response.id;
//   document.getElementById("fname").value = response.first_name;
//   document.getElementById("lname").value = response.last_name;
//   document.getElementById("email").value = response.email;
//   document.getElementById("phone").value = response.phone;
// };

// Update User Ajax Request
// updateForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const formData = new FormData(updateForm);
//   formData.append("update", 1);

//   if (updateForm.checkValidity() === false) {
//     e.preventDefault();
//     e.stopPropagation();
//     updateForm.classList.add("was-validated");
//     return false;
//   } else {
//     document.getElementById("edit-user-btn").value = "Please Wait...";

//     const data = await fetch("action.php", {
//       method: "POST",
//       body: formData,
//     });
//     const response = await data.text();

//     showAlert.innerHTML = response;
//     document.getElementById("edit-user-btn").value = "Add User";
//     updateForm.reset();
//     updateForm.classList.remove("was-validated");
//     editModal.hide();
//     fetchAllUsers();
//   }
// });

// Delete User Ajax Request
// tbody.addEventListener("click", (e) => {
//   if (e.target && e.target.matches("a.deleteLink")) {
//     e.preventDefault();
//     let id = e.target.getAttribute("id");
//     deleteUser(id);
//   }
// });

// const deleteUser = async (id) => {
//   const data = await fetch(`action.php?delete=1&id=${id}`, {
//     method: "GET",
//   });
//   const response = await data.text();
//   showAlert.innerHTML = response;
//   fetchAllUsers();
// };


// var musicApi = 'server.php';

// function start() {
//     getMusic(renderMusic);

//     // handleCreateForm();
// }

// start();

// function getMusic(callback){
//     fetch(musicApi).then(function(response){
//         return response.json();
//     }).then(callback);
// }

// function renderMusic(music){
//     var listMusicBlock = document.querySelector('tbody');
//     var htmls = music.map(function(mus){
//         return `
//             <tr>
//             <td>${mus.id}</td>
//             <td>${mus.name_singer}</td>
//             <td>${mus.name_song}</td>
//             <td>${mus.id_playlist}</td>
//             <td>${mus.audio}</td>
//             <td>${mus.image}</td>
//             </tr>
//         `;
//     })
//     listMusicBlock.innerHTML = htmls.join('');
// }


