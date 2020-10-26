import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {getUser, getUserFollowing} from '../../actions/githubActions';
import {useDispatch} from 'react-redux';
import './NavBar.css';

export default function NavBar(props) {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    const handleKeyUp = (e) => {
        e.preventDefault();
        if(e.key === 'Enter') {
            e.preventDefault();
            dispatch(getUser(inputText));
            dispatch(getUserFollowing(inputText, 0, 10));
            setInputText('');
        }
    };

    return (
        <div className="nav-wrapper">
            <div><h2>GitHub Search</h2></div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/following">Following</Link>
            </div>
            <div>
                <input 
                    className="nav-input" 
                    type="text"
                    placeholder="Add a Todo" 
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Search a GitHub User"
                />
                <Button variant="contained"><SearchIcon /></Button>
            </div>
        </div>
    )
}
