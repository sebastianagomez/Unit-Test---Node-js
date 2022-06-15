// Run "mocha test"

const assert = require('assert');

describe('file to be tested', () =>{
    context('function to be tested', () => {

        // before(()=>{
        //     console.log("=====Before");
        // });

        // after(()=>{
        //     console.log("=====After");
        // });

        // beforeEach(()=>{
        //     console.log("----BeforeEach");
        // });

        // afterEach(()=>{
        //     console.log("----AfterEach");
        // });

        it('should do something', () => {
            assert.equal(1,1);
        });

        it('should do something else', () => {
            assert.deepEqual({name: 'Joe'}, {name: 'Joe'});
        });

        it("This is a depending test");
    });

    context('Another function', () => {
        it('Should do something');
    });
});