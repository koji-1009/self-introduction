import React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme): StyleRules => createStyles({
});

interface Props extends WithStyles<typeof styles> {
}

class ProfileComponent extends React.Component<Props> {

    render() {
        return <div>

        </div>
    }
}

export default withStyles(styles)(ProfileComponent);