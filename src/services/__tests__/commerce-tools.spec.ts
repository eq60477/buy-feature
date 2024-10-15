import { fetchData } from '../commerce-tools';

describe('fetchData', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ userId: 1, id: 1, title: 'delectus aut autem', completed: false }),
            })
        ) as jest.Mock;
    });

    it('should fetch data and return JSON', async () => {
        const data = await fetchData();
        expect(data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false });
    });

    it('should call fetch with the correct URL', async () => {
        await fetchData();
        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/1");
    });
});