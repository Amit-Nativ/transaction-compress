import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';

import useFetch from '../../hooks/use-fetch';
import List from './List';

export default () => {
    const classes = useStyles();
    const { data: { paying, receiving }, error, loading } = useFetch('/api/transactions');

    if (error) {
        return (
            <Box>{"התרחשה תקלה"}</Box>
        )
    }

    if (loading) {
        return (
            <CircularProgress style={{ alignSelf: 'center' }} />
        )
    }

    return (
        <Box className={classes.container}>
            <List transactions={paying} title={'paying'} />
            <List transactions={receiving} title={'receiving'} />
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    }
})