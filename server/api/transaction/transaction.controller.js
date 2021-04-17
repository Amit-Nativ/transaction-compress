import toCsv from 'objects-to-csv'

import { read, write } from '../../config/json'
import { add, groupAmountByParty, groupByMethod } from './transaction.utils';

export const get = (req, res) => {
    const transactions = read();
    return groupByMethod(transactions);
};

export const addTransaction = async ({ body: { amount, counterparty } }, res) => {
    const transactions = read();
    const updated = add(transactions, counterparty, amount);

    await write(updated);
    res.sendStatus(200)
}

export const compressTransactions = async (req, res) => {
    const transactions = read();
    const compressed = groupAmountByParty(transactions);

    const formatted = Object.keys(compressed).map(x => ({
        tradingParty: 'me',
        counterparty: x,
        amount: compressed[x]
    }))

    await write(formatted);
    return new toCsv(formatted).toString();
}