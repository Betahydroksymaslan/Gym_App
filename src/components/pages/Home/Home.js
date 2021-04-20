import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'store/AuthContext';


const Home = props => {
    const {logout, currentUser} = useAuth();

   const logOut = () => {
       logout()
       console.log(currentUser);
   }

   useEffect(() => {
    console.log(currentUser)
   }, [])
    return (
        <div>
            HOME
            <button onClick={logOut}>Wyloguj się</button>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;