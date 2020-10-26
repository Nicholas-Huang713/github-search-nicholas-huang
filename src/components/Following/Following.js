import React from 'react'
import './Following.css';
import { useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';

export default function Following() {
    const userData = useSelector(state => state.github.user);
    const following = useSelector(state => state.github.following);

    return (
        <>
            {
                userData.login === 'undefined' ?
                <h2>Search for a GitHub User</h2> 
                :
                <Paper>
                    <div>
                        <div>
                            {userData.following} following
                        </div>
                        <br/>
                        <div>
                            <ul>
                                {
                                    following.map((user) => {
                                    return <li>
                                        <img src={user.avatar_url}/>
                                        {user.login}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                       
                    
                    </div>
                    
                </Paper>
                
                
                
            }
            
        </>
    )
}
