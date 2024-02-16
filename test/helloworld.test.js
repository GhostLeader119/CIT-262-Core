import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';
it("Test Hello World", ()=>{
    const hello = sayHello(1);
    // const failure_test = sayHello(2); Wanted to see what multiple tests did, mixing successes and failures.

    assert.equal(hello,"hello caden");
    // assert.equal(failure_test,"hello caden");

    console.log(hello);
});