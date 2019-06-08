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
            <p>Hi! I'm Koji-1009, Android Application Developer!</p>

            <h2>Skill</h2>
            <ul>
                <li>Android</li>
                <ol>
                    <li>Java/Kotlin</li>
                    <li>Kotlin Coroutines</li>
                    <li>Android DataBinding</li>
                    <li>Android Archiecture Component</li>
                    <li>RxJava/RxKotlin/RxAndroid</li>
                </ol>
                <li>CI</li>
                <ol>
                    <li>CircleCI</li>
                    <li>Bitrise</li>
                </ol>
            </ul>

            <h2>links</h2>
            <ul>
                <li><a href="https://github.com/koji-1009" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://dr1009.hatenablog.com/" target="_blank" rel="noopener noreferrer">Blog(in Japanease)</a></li>
            </ul>
        </div>
    }
}

export default withStyles(styles)(ProfileComponent);