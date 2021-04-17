import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

export default () => {
    const compress = async () => {
        const { data } = await axios.put('/api/transactions/compress');
        console.log({ data });
        location.reload();
    }

    return (
        <Button onClick={compress}>
            {'Compress Transactions'}
        </Button>
    )
}