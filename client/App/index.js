import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import CompressButton from './components/CompressButton';
import Transactions from './Transactions';

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Transactions />
                <CompressButton />
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        // overflow: 'hidden',
        flexDirection: 'column',
        width: '100%'
    }
})