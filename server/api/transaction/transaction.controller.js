import { BadRequestError } from 'error-middleware/errors'

import { read, write } from '../../config/json'
import { groupAmountByParty, groupByMethod } from './transaction.utils';

export const get = (req, res) => {
    const transactions = read();
    return groupByMethod(transactions);
};

export const addTransaction = (req, res) => { res.send(200) }

export const compressTransactions = (req, res) => {
    const transactions = read();
    const compressed = groupAmountByParty(transactions);

    const formatted = Object.keys(compressed).map(x => ({
        tradingParty: 'me',
        counterparty: x,
        amount: compressed[x]
    }))

    write(formatted);
    res.send(200);
}