import React from 'react';
import { List, ListItem, Typography, Link } from '@material-ui/core';

export default function Links() {
    return (
        <List>
            <Typography variant="h4" component="h2" gutterBottom>Links</Typography>
            <ListItem>
                <Link href="https://blog.dr1009.com/">Blog</Link>
            </ListItem>
            <ListItem>
                <Link href="https://speakerdeck.com/d_r_1009/">SpeakerDeck</Link>
            </ListItem>
            <ListItem>
                <Link href="https://twitter.com/D_R_1009">Twitter</Link>
            </ListItem>
        </List>
    );
}
