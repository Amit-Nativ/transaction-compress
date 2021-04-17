export const groupByMethod = (transactions) => {
    return transactions.reduce((acc, curr) => {
        const key = curr.amount < 0 ? 'paying' : 'receiving'
        acc[key].push(curr);

        return acc;
    }, { paying: [], receiving: [] });
}

export const groupAmountByParty = (transactions) => {
    return transactions.reduce((acc, curr) => {
        acc[curr.counterparty] = acc[curr.counterparty] || 0;
        acc[curr.counterparty] += curr.amount;

        return acc;
    }, {})
}