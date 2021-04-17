import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import downloadFile from 'js-file-download'

export default () => {
    const compress = async () => {
        const { data } = await axios.put('/api/transactions/compress');

        downloadFile(data, 'compressed.csv')
        location.reload();
    }

    return (
        <Button onClick={compress}>
            {'Compress Transactions'}
        </Button>
    )
}