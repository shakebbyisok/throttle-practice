import throttle from '../src/throttle';

describe('throttle function', () => {
    it('should execute the function only once within the given time frame', done => {
        let count = 0;

        const throttledFunction = throttle(() => {
            count++;
        }, 1000);

        throttledFunction();
        throttledFunction();
        throttledFunction();

        setTimeout(() => {
            expect(count).toBe(1);
            done();
        }, 1100);
    });
});
