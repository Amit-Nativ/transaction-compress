import React, { useState } from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'
import AddButton from './components/AddButton';
import AddDialog from './components/AddDialog';
import CompressButton from './components/CompressButton';
import Transactions from './Transactions';

export default () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Transactions />
            </Box>
            <Box className={classes.buttons}>
                <CompressButton />
                <AddButton setOpen={setOpen} />
            </Box>
            <AddDialog open={open} handleClose={handleClose} />
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    buttons: {
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px'
    }
})