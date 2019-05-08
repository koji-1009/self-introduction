import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

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

interface Props extends WithStyles<typeof styles> {
    title?: string;
}

class TestComponent extends React.Component<Props> {

    public render() {
        const { classes, title } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    {title || "My Third TS Component"}
                </div>
                <div>
                    <CounterButton />
                </div>
            </div>
        );
    }
}

function CounterButton() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Click me</Button>
        </div>
    );
}

export default withStyles(styles)(TestComponent);
