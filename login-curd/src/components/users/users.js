import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get('/get_users').then((resp) => {

            setUsers(resp.data);
            // console.log(resp.data)

        });

    }, []);


    return <table border="1">
        {
            users.map((user, index) => {
                return <tr>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td><button onClick={() => {

                        axios.delete('/delete?myIndex=' + index).then((resp) => {

                            setUsers(resp.data);
                            // console.log(resp.data)

                        });


                    }}>Delete</button>
                        <button onClick={() => {

                            let newEmail =  prompt("Enter email", user.email);
                            let newCity =  prompt("Enter city", user.city);

                            axios.put('/edit', {
                                index,
                                newEmail,
                                newCity
                            }).then((resp) => {

                                setUsers(resp.data);
                                // console.log(resp.data)

                            });


                        }}>Delete</button></td>
                </tr>
            })
        }
    </table>

}