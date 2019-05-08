import React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

import logo from '../logo.svg';

const styles = (theme: Theme): StyleRules =>
    createStyles({
        root: {
            textAlign: "center"
        },
        header: {
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[2],
            padding: theme.spacing.unit * 2,
        },
        counter: {
            fontSize: 60
        },
    });

interface DemoProps extends WithStyles<typeof styles> {
}

class DemoComponent extends React.Component<DemoProps> {

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    <p>
                        My Demo TS Component
                    </p>
                </div>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
            </a>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(DemoComponent);
