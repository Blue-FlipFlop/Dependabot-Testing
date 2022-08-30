const { assert } = require("chai")

describe('Example flaky test', () => {
  var attemptNumber = 0;

  it('passes 3rd time', () => {
    attemptNumber++;
    assert(attemptNumber === 3);
  })
})