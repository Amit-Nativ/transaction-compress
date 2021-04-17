import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import downloadFile from 'js-file-download'

export default () => {
    const compress = async () => {
        try {
            const { data } = await axios.put('/api/transactions/compress');

            download(data);
        } catch (e) {
            alert('An Error Occured');
            console.log(e);
        } finally {
            location.reload();
        }
    }

    const download = async (data) => {
        downloadFile(data, 'compressed.csv')
    }

    return (
        <Button onClick={compress}>
            {'Compress Transactions'}
        </Button>
    )
}