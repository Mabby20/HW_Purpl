type Value = number | string | boolean

type Pair = [string, Value];

type Bucket = Pair[];

type Data = Record<number, Bucket>


interface DataAlternative {
    [index: number]: Bucket
}

class MyMap {
    private data: Data = {}

    private getHash(key: string): number {
        let hash = 0

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash;
    }

    private hasEqualHash(hash: number): boolean {
        return hash in this.data;
    }

    private getIndexPair(key: string, hash: number): number {
        return this.data[hash].findIndex((pair) => pair[0] === key);
    }

    add(key: string, value: Value): void {
        const hash = this.getHash(key);
        const hashHash = this.hasEqualHash(hash);

        if (hashHash) {
            const hasEqualKey = this.data[hash].some((pair) => pair[0] === key)
            if (!hasEqualKey) {
                this.data[hash].push([key, value])
            }

            const indexPair = this.getIndexPair(key, hash);
            this.data[hash][indexPair] = [key, value];
        }

        this.data[hash] = [[key, value]]
    }

    delete(key: string): void {
        const hash = this.getHash(key);
        const hashHash = this.hasEqualHash(hash);

        if (!hashHash) {
            throw new Error('данного ключа не существует')
        }

        this.data[hash] = this.data[hash].filter((pair) => pair[0] !== key)
    }

    getValue(key: string): Value {
        const hash = this.getHash(key)
        const index = this.getIndexPair(key, hash)
        return this.data[hash][index][1]
    }

    clear() {
        this.data = {};
    }
}

const map = new MyMap();
map.add('abc', 1)
map.add('bca', 1)
map.add('aboba', 1)
console.log(map)
map.add('abc', 2)
console.log(map)
map.delete('abc')
map.getValue('bca')
map.getValue('abc')
console.log(map)
map.clear()
console.log(map)
