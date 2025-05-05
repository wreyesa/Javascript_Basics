const util = require('util');
const sleep = util.promisify(setTimeout);


module.exports = {

    async taskOne() {
        try {
            throw new Error('Some Problem');
            await sleep(4000);
            return 'one value';
        }
        catch(e) {
            console.log(e);
        }


    },

    async taskTwo() {
        try {
            await sleep(2000);
            return 'two value';
        } catch(e) {
            console.log(e);
        }

    }
};