import React, { useState, useEffect } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/WorkOff';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

import useDebounce from '../../util/debounce';
import TeamUser from './TeamUser';
import { useAppContext } from '../../context/AppContext';
import { BASE_URL } from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
        display: 'block',
        width: theme.spacing(56),
    },
}));

export default function Team() {

    const classes = useStyles();

    const { token } = useAppContext();

    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 250);

    const [team, setTeam] = useState({ name: '', users: [], skills: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(BASE_URL + 'team', { params: { filter: search }, headers: { 'Authorization': `Bearer ${token}` } });
            setTeam(result.data);
        }
        fetchData();
    }, [token, debouncedSearch]);

    const renderUsers = (available = true) => {
        const filteredUsers = team.users
            .filter(u => u.available === available)
        const size = filteredUsers.length;

        if (size === 0) {
            return (
                <ListItem style={{ paddingLeft: 10 }}>
                    <ListItemIcon style={{ minWidth: 46 }}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="This category is empty"
                    />
                </ListItem>
            )
        }

        return filteredUsers.map((user, index) => {
            return (
                <div key={user.id}>
                    <TeamUser user={user} />
                    {index + 1 < size && <Divider component="li" />}
                </div>
            )
        })
    }

    return (
        <div className={classes.root}>
            <div style={{ display: 'block' }}>
                <Typography variant="h5">
                    Team {team.name}
                </Typography>

                <TextField
                    type="search"
                    variant="filled"
                    fullWidth
                    label="Filter skills"
                    margin="normal"
                    onChange={(event) => { setSearch(event.target.value) }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                { /* Available */}
                <Typography variant="h6">
                    Available
                </Typography>
                <List style={{ padding: 0 }}>
                    {renderUsers()}
                </List>

                { /* Not available */}
                <Typography variant="h6">
                    Not available
                </Typography>
                <List style={{ padding: 0 }}>
                    {renderUsers(false)}
                </List>
            </div>
        </div>
    );
}
