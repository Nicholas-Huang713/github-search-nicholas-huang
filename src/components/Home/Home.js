import React from 'react'
import { useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import './Home.css';


export default function Home() {

    const userData = useSelector(state => state.github.user);
    return (
        <div className="home-wrapper">
            {
                userData.login ?
                <Paper>
                    <div className="paper-wrapper">
                        <div> <img src={userData.avatar_url} alt="user avatar"/></div>
                        <div>
                            <b>{userData.login}</b>
                            <p>Followers: {userData.followers}</p></div>
                        </div>
                </Paper>
                :
                <h2>Search for a GitHub User</h2>     
            }
        </div>
    )
}
