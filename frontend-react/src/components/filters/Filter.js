import { useEffect, useState } from "react";




export default function Filter() {

    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");


    useEffect(() => {

        async function getData() {

            try {

                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await response.json();

                // console.log(data);
                setUsers(data);

            } catch(error) {
                console.log(error);
            }

        }

        getData();
        
    }, []);


    async function handleChange(event) {

        setText(event.target.value);

        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            const data = await response.json();

            if(event.target.value) {

                const newArray = data.filter(item => {

                    return item.name.toLowerCase().includes(event.target.value.toLowerCase());
                    
                });

                console.log("Filtered Data:", newArray);

                return setUsers(newArray);
            }

            console.log("Original Data:", data);

            setUsers(data);

        } catch(error) {
            console.log(error);
        }


    }














    return (

        <div>
            <input type="text" name="text" onChange={handleChange} />

            {users.map(user => {
                return (
                    <div className="user-info" key = {user.id}>
                        <p>{user.name}</p>
                    </div>
                );
            })}
        </div>

    );
}