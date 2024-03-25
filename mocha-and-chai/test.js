"use strict";
describe("pow", function(){

    before(() => alert("Testing started - before all tests"));
    after(() => alert("Testing finished - after all tests"));

    /*beforeEach(() => alert("Before a test - enter a test"));
    afterEach(() => alert("After a test - exit a test"));*/
    
    it("2 raised to power 3 is 8", function() {
        chai.assert.equal(pow(2, 3), 8);
    });
    
    it("3 raised to power 4 is 81", function() {
        chai.assert.equal(pow(3, 4), 81);
    });

    // generate tests for x**3
    describe("raises x to power 3", function(){
        
        function makeTest(x){
            let expected = x*x*x;
            it(`${x} to the power of 3 is ${expected}`, function(){
                //alert(x);
                chai.assert.equal(pow(x,3), expected);
            });
        }
        for (let x=0; x<=5; x++){
            makeTest(x);
        }
    });

    // invalid n tests
    it("for negative n, the result is NaN", function(){
        chai.assert.isNaN(pow(2,-1));
    });
    it("for non-integer n, the result is Nan", function(){
        chai.assert.isNaN(pow(2, 0.5));
    });
});