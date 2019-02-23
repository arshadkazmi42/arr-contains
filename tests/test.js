const expect = require('chai').expect;

const arrayContains = require('../index');


describe('Validates if array contains values', () => {
  it('should return true', () => {
    const has = arrayContains(['fastret', 'array', 'contains', 'me'], ['array', 'contains']);
    expect(has).to.equal(true);
  });
  it('should return false', () => {
    const has = arrayContains(['fastret', 'contains', 'me'], ['array', 'contains']);
    expect(has).to.equal(false);
  });
  it('should throw error', () => {
    try {
      arrayContains('throws', ['array', 'contains']);
    } catch (e) {
      expect(e.message).to.equal('Invalid Array');
    }
  });
});
