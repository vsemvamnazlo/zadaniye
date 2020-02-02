import React, { useState } from 'react';
import axios from 'axios'

function User() {
    const [user, setUser] = useState();
    React.useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
          setUser(response.data)
        })
    }, [])
    return (
        <div id='User'>
          <div id='mainInfo'>
            <div id='photo1'></div>
            <p>{user && <div>{(user[2].name)}</div>}</p><p>{user && <div>{(user[2].username)}</div>}</p><p>{user && <div>{(user[2].email)}</div>}</p><p>{user && <div>{(user[2].phone)}</div>}</p><p>{user && <div>{(user[2].website)}</div>}</p>
          </div>
          <div id='companyInfo'>
            <p>{user && <div>{(user[2].company.name)}</div>}</p><p id='q'>{user && <div>{(user[2].company.catchPhrase)}</div>}</p><p id='w'>{user && <div>{(user[2].company.bs)}</div>}</p>
          </div>
        </div>
    )
}

export default User
//{user && <div>{(user[2].name)}</div>}