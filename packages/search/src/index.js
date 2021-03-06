import Grid from 'wzrd-grid';

class Search {
    constructor() {
        this.grid = new Grid();

        console.log('Search is created');
    }

    getComponentName() {
        return 'Search';
    }

    render() {
        return `Search:\n ${this.grid.render()}`;
    }
}

export default Search;
