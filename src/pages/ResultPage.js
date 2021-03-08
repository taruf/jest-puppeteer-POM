class ResultPage{

    constructor(page) {
        this.page = page
    }

    async getTitle() {
        return this.page.title();
    }
}

module.exports = ResultPage;