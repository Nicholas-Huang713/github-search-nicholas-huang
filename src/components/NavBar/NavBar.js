import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './NavBar.css';

export default function NavBar() {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e) => {
        e.preventDefault();
        if(e.key === 'Enter') {
            console.log('ENTER PRESSED')
            console.log(inputText);
            e.preventDefault();
            // const userId = 1;
            // const title = inputText;
            // const completed = false;
            // const newTodo = new Todo(userId, title, completed);
            // dispatch(createTodo(newTodo));
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
                />
                <Button variant="contained"><SearchIcon /></Button>
            </div>
        </div>
    )
}
