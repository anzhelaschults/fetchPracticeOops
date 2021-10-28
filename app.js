/**
 * https://getbootstrap.com/docs/5.1/components/navs-tabs/

 На странице в левой части постоянный список пользователей.
 В правой части отображены ссылки-табуляторы "Полная информация", "Задачи", "Посты", "Фотоальбомы"
 При клике на ссылку-табулятор соответствующая информация отображается на экране, а все остальные не видны
 При смене пользователя, с песочницы получаем всю его необходимую информацию, а вкладка "Информация" автоматически активируется
 */
/*  Full Info, Tasks, Posts, Albums */

/*
1. Create Arrays: users, tasks, albums
3. Main function
2. users: Fetch users;
Render users + create div + eventListener.
 */

let users = []
let tasks = []
let albums = []

const main = () => {
    selectUser()
    fetchTasksByUser()
    selectTask()
}
main()

/**
 * we take users from URL/users
 * https://jsonplaceholder.typicode.com/users
 */

const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        users = data
    } catch (e) {
        consol.log(e)
    }
    renderUsers();
}

const renderUsers = () => {
    users.forEach(user => {
        const userEle = document.createElement('div')
        userEle.className = 'left-item'
        userEle.textContent = user.name
        userEle.addEventListener('click', () => {
            selectUser = (user)
            })
            userList.append(userEle)
        })
        const selectUser = (user) => {
        }

        /**
         * we select todos by userId
         * https://jsonplaceholder.typicode.com/todos
         */
        const fetchTasksByUser = async (userId) => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId')
                const tasksList = await response.json()
                tasks = tasksList
            } catch (e) {
                console.log(e)
            }
        }

        /**
         * all tasks should be displayed depending on selected userId
         */
        const renderTasksByUser = () => {
            tasksList.forEach(task => {
                const taskEle = document.createElement('div')
                taskEle.className = 'right-item'
                taskEle.textContent = task.title
                taskEle.addEventListener('click', () => {
                    selectTask = (task)
                })
                tasksList.append(taskEle)
            })
        }
                // const selectTask = (task) => {
                // } Uncaught SyntaxError: Unexpected end of input ???