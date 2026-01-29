import { useState } from "react";

const AddUserForm = (props)=>{
    //forms initial state 
    const initialFormState = {id:null, name:'', username:''}
    const [user, setuser] = useState(initialFormState);

    const handleInputChange = (event) =>{
       const {name, value} = event.target

       setuser({...user, [name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name || !user.username) return;
                props.addUser(user);
                setuser(initialFormState);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Username</label>
            <input type="text"onChange={handleInputChange} name="username" value={user.username} />
            <button>Add New User</button>
        </form>
    )
}

export default AddUserForm;