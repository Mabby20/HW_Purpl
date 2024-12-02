const data = {
    a: 1,
    b: 2,
    c: 3
}

//! скорее всего не верный вариант, теряю типы после преобразования в entries
const getSwapObj = <T>(data: Record<string, T>): Record<string, T> => {
    const entries = Object.entries(data)
    const reverseEntries = entries.map((i) => {
        const res = i.reverse()
        return res;
    });
    const entriesValueToNumber = reverseEntries.map(([key, value]) => {
        const cloneValue = value;
        const number = Number(cloneValue)
        const curNum = Number.isNaN(number) ? cloneValue : number;
        return [key, curNum]
    })
    const resObj = Object.fromEntries(entriesValueToNumber);

    return resObj
}

//! variant 2
type TData = Record<string, number>
type YData = Record<number, string>

const getSwapObj2 = <T extends TData, Y extends YData>(data: T): Y => {
    const reversedObj = {} as Y;
    const entries = Object.entries(data);

    entries.forEach(([key, value]) => {
        reversedObj[value] = key
    })

    return reversedObj;
}

//! variant 3 - вероятно правильный вариант, но есть проблема, типы у ключа выводятся как литералы,
//! соответсвенно при добавлении нового значения в такой объект - ТС будет ругаться.
//! было бы интересно посмотреть решение такой задачи.
type Test = string | number | symbol

const getSwapObj3 = <T extends Test, Y extends Test>(data: Record<T, Y>): Record<Y, T> => {
    const reversedObj = {} as Record<Y, T>;

    for (const key in data) {
        const value = data[key] as Y;
        reversedObj[value] = key as T;
    }

    return reversedObj;
}

const res = getSwapObj3(data)
res['a'] = 1 //! типизация будет ругаться