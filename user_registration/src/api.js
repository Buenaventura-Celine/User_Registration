export const getUsers = () => fetch("http://localhost:4000").then(res => res.json())

export const createUser = (user) => fetch("http://localhost:4000/create", {
    method: "POST",
    headers :{
        "Accept" : "application/json",
        "Content-type": "application/json"
    },
    body: JSON.stringify(user)
})