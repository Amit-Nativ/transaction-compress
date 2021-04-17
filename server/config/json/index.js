import { writeFile } from 'fs'
import { join } from 'path'
import pify from 'pify'

import transactions from '../../../resources/transactions.json'

const writeFileAsync = pify(writeFile);

export const read = () => transactions;

export const write = async (transactions) => {
    try {
        await writeFileAsync('resources/transactions.json', JSON.stringify(transactions));
    } catch (e) {
        console.log('error when updating file')
        console.log(e.message);
    }
};
