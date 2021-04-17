import React from 'react';
import { Button } from '@material-ui/core';

export default ({ setOpen }) => {
    const openDialog = () => setOpen(true);

    return (
        <Button onClick={openDialog}>
            {'Add New Transaction'}
        </Button>
    )
}