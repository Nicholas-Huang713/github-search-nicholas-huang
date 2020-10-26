import React, {useState} from 'react'
import './Following.css';
import { useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {getUserFollowing} from '../../actions/githubActions';

export default function Following() {
    const userData = useSelector(state => state.github.user);
    const following = useSelector(state => state.github.following);
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(10);

    const loadMore = () => {
        setPageSize(pageSize + 10);
        const userName = userData.login;
        dispatch(getUserFollowing(userName, 0, pageSize + 10));
    }
    return (
        <div className="follow-wrapper">
            {
                userData.login?
                <Paper>
                    <div>
                        {userData.following} following
                        <br/>
                        {
                            following.length < userData.following?
                            <Button variant="contained" onClick={loadMore}>Load More</Button>
                            :
                            <Button variant="contained" disabled>Load More</Button>
                        }
                        
                    </div>
                    <div className="following-list-wrapper">
                        
                        <br/>
                        <div className="following-list">
                            <ul>
                                {
                                    following.map((user) => {
                                    return <li>
                                                <div className="following-list-item-wrapper">
                                                    <div>
                                                        <img src={user.avatar_url} alt="user avatar" />
                                                    </div>
                                                    <div>
                                                        {user.login}
                                                    </div>
                                                </div>   
                                            </li>
                                    })
                                }
                            </ul>
                        </div>
                       
                    
                    </div>
                    
                </Paper>
                :
                <h2>Search for a GitHub User</h2>  
            }
            
        </div>
    )
}
