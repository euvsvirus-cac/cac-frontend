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

    const user = props.user;
    const skills = user.skills.map((s) => s.name).join(', ');

    return (
        <ListItem style={{ paddingLeft: 0 }}>
            <ListItemAvatar>
                <Avatar alt={props.user.fullName} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                style={{ paddingRight: 28 }}
                primary={user.fullName}
                secondary={skills}
            />
            <ListItemSecondaryAction>

                <IconButton edge="end" aria-label="phone" disabled>
                    <PhoneIcon />
                </IconButton>

                <IconButton edge="end" aria-label="mail" href={'mailto:' + user.email}>
                    <MailIcon />
                </IconButton>

                {user.slackUid &&
                    <IconButton
                        edge="end"
                        aria-label="slack"
                        target="_blank"
                        href={`https://euvsvirus.slack.com/team/${user.slackUid}`}
                    >
                        <Avatar style={{ height: 24, width: 24 }} src="/images/slack.png" />
                    </IconButton>
                }
            </ListItemSecondaryAction>
        </ListItem>
    )
}
