import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export default ({ transactions, title }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Typography variant='h5'>{title}</Typography>
            <Box className={classes.list}>
                {transactions.map(x => (
                    <Box key={`${x.counterparty}${x.amount}`} className={classes.transaction}>
                        <Typography>{x.counterparty}</Typography>
                        <Typography>{`${Math.abs(x.amount)}$`}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '300px',

    },
    list: {
        height: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%'
    },
    transaction: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '10px'
    },
    title: {
        borderStyle: 'dashed'
    }
})