import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Button, Icon, ListItemText, Typography } from '@material-ui/core';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import { db } from './firebase_config';
import './App.css';

export default function CredsItem({name, passwords, isVisible,id}){
    function toggleIsVisible(){
        console.log(id);
        db.collection("passwords").doc(id).update({
            isVisible: !isVisible
        });
        console.log("Reached here");
    }
    return (
        <div > 
            <div className="List">
            <ListItem >
                <ListItemText variant="outlined">
                    <h3>
                        {name}
                    </h3>
                </ListItemText>
                
                <Button onClick={toggleIsVisible}>{isVisible?<label>{passwords}</label>:<VisibilityOffSharpIcon/>}</Button>
            </ListItem>
            </div>
            
            
        </div>
    )
}