import React from 'react';
import styles from './categorynav.module.css';
import {UPACHAR_URL, ALL_CATEGORIES_LIST} from '../../Constants'

class CategoryNav extends React.Component{
    
    state = {
        items : []
    }

    componentDidMount(){
        let all_categories_url = UPACHAR_URL + ALL_CATEGORIES_LIST
        console.log(all_categories_url)
        fetch(all_categories_url, {mode: 'no-cors'}).then((response) => {
            console.log(response)
            return response.json();
        }).then((data) => {
                console.log(data);
            });
    }


    render(){
        return (
            <div>
            <nav className={styles.categorynav}>
            <li>Personal Care</li>
            <li>Home</li>
            <li>Winter</li>
            <li>Sexual Wellness</li>
            </nav>
            </div>
        )
    }
}

export default CategoryNav