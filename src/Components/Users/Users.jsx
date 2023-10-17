import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers]= useState();

    useEffect(()=>{
        fetch('https://lawncare-server-imux2lo58-sakib-al-hasans-projects.vercel.app/users')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[])

    return (
        <div>
            <h2>Users: {users?.length}</h2>
            {
                users?.map(user=> <p key={user._id}> 
                {user.email} :
                {user.password}
                </p>)
            }
        </div>
    );
};

export default Users;