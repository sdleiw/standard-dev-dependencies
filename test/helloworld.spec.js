import { expect } from 'chai'

import testObject from '../src/helloworld'

describe('hello world test', () => {
    it('should print hello world', () => {
        expect(testObject.printHello('World')).to.equal('hello World')
    })
})
