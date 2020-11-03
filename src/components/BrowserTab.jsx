import { CardMedia } from '@material-ui/core';
import React from 'react';

const BrowserTab = (props) => {
    const { link } = props;
    return (
        <CardMedia height={500} component="iframe" src={link} />
    );
}

export default BrowserTab;
