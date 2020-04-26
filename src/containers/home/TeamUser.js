import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

export default function TeamUser(props) {

    const skills = props.user.skills.map((s) => s.name).join(', ');

    return (
        <ListItem style={{ paddingLeft: 0 }}>
            <ListItemAvatar>
                <Avatar alt={props.user.fullName} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={props.user.fullName}
                secondary={'Skills: ' + skills}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <PhoneIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <MailIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
