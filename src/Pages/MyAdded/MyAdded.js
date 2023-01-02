import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import MyBookedBook from '../MyBooked/MyBookedBook/MyBookedBook';
import MyAddedBook from './MyAddedBook/MyAddedBook';

const MyAdded = () => {

     // Get User Email
     const {databaseUserInfo} = useContext(UserAuth)

     const [bookedBooks, setBookedBooks] = useState([]);
 
 
     useEffect(()=> {
         fetch(`https://bookhouse-server-mkmahmud.vercel.app/myadded?email=${databaseUserInfo?.email}`)
          .then(res => res.json())
          .then(data => setBookedBooks(data))
     }, [databaseUserInfo.email])
 
     console.log(bookedBooks)

    return (
        <div>
            <h2 className='text-4xl py-2 font-bold text-left'>My Added Books</h2>
            <div className="mybookedBooks p-2 ">
                   {
                    bookedBooks.map(bookedBook => <MyAddedBook data={bookedBook} key={bookedBook._id}></MyAddedBook>)
                   }
            </div>
        </div>
    );
};

export default MyAdded;