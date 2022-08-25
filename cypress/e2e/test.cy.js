const { assert } = require("chai")

describe('empty spec', () => {
  it('passes', () => {
    assert(true);
  })

  it('sometimes passes', () => {
    var result = Math.floor(Math.random() * 3);
    console.log(result);
    assert(result == 0)
  })
})