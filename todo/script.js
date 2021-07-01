function createUser() {
    let user_name = userr.value
    let task_name = task.value
    let status = complete.value
    let user = {
        user_name, task_name, status
    }
    localStorage.setItem(user_name, JSON.stringify(user))
    alert(" details saved")
}

function listAll() {
    let user = [];
    for (let i = 0; i < localStorage.length; i++) {
        user.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
   }
    let detail = ""
    for (item of user) {
        detail+=`<ul class="list-group">
        <li class="list-group-item active" aria-current="true">${item.user_name}</li>
        <li class="list-group-item">${item.task_name}</li>
        <li class="list-group-item">${item.status}</li>
      </ul>`
    }
    list.innerHTML=detail
}