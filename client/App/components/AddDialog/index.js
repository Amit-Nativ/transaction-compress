import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Input, makeStyles, TextField, Typography } from '@material-ui/core';
import { post } from 'axios';
import React from 'react';

export default ({ open, handleClose }) => {
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const counterparty = e.target['counterparty'].value;
            const amount = e.target['amount'].value;

            await post('/api/transactions', { amount, counterparty });

            alert('Transaction was successfully added!');
        } catch (e) {
            alert('An Error Occured');
            console.log(e);
        } finally {
            location.reload();
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={handleSubmit} action={"/api/transactions"} method={"post"}>
                <DialogTitle>{'Add New Transaction'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {'Please fill counterparty name and wanted amount.'}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        name={"counterparty"}
                        label={"Name"}
                        type={"text"}
                        className={classes.input}
                    />
                    <TextField
                        required
                        name={"amount"}
                        label={"Amount"}
                        type={"number"}
                        inputProps={{
                            min: '0'
                        }}
                        className={classes.input}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        {'Cancel'}
                    </Button>
                    <Button type='submit'>
                        {'Add Transaction'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}


const useStyles = makeStyles({
    input: {
        margin: '0px 5px'
    }
})