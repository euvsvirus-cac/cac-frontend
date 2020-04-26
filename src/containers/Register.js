import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { AppContext } from "../context/AppContext";

import RegisterAccount from './RegisterAccount'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <>{children}</>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

class Register extends Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    render() {
        const handleChange = (event, newValue) => {
            this.setState({ value: newValue });
        };

        const switchToJoinATeam = () => handleChange(null, 1);

        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
                <Paper style={{ width: 360, padding: 20 }}>
                    <div>
                        <Tabs value={this.state.value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="New account" {...this.a11yProps(0)} />
                            <Tab label="Join a team" {...this.a11yProps(1)} />
                        </Tabs>
                    </div>

                    <TabPanel value={this.state.value} index={0}>
                        <RegisterAccount switch={switchToJoinATeam} />
                    </TabPanel>

                    <TabPanel value={this.state.value} index={1}>
                        TODO.
                    </TabPanel>
                </Paper>
            </div >
        );
    }
}

export default withRouter(Register);
