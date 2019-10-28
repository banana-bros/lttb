import { expect } from 'chai';
import { Repository } from '../../src';

describe('Repository', () => {
    let repository: Repository<void>;

    beforeEach(() => {
        repository = new Repository(null);
    });

    it('should be created', () => {
        expect(repository).to.be.ok;
    });
});
