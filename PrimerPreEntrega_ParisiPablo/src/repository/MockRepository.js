class MockRepository {
    constructor(MockGenerator) {
        this.MockGenerator = MockGenerator;
    }

    create(quantity) {
        const generator = new this.MockGenerator(quantity);
        return generator.generate();
    }

    getAll(quantity) {
        return this.create(quantity);
    }
}

export default MockRepository;