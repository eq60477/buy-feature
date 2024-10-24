import { fetchAllEntries, fetchEntryByUID } from '../contentstack';


const mockEntries = [
  {
    uid: "entry1",
    banner_title: "Banner Title 1",
  },
  {
    uid: "entry2",
    banner_title: "Banner Title 2",
  }
];

const mockSingleEntry = {
  uid: "entry1",
  banner_title: "Banner Title 1",
};

jest.mock('@contentstack/delivery-sdk', () => {
  const originalModule = jest.requireActual('@contentstack/delivery-sdk');
  return {
    ...originalModule,
    stack: jest.fn(() => ({
      contentType: jest.fn(() => ({
        entry: jest.fn((uid) => ({
          query: jest.fn(() => ({
            find: jest.fn(() => Promise.resolve({ 
              entries: mockEntries, 
            })),
          })),
          fetch: jest.fn(() => Promise.resolve(mockSingleEntry)),
        })),
      })),
    })),
  };
});

describe('Contentstack Service', () => {
  it('should fetch all entries and return JSON', async () => {
    const data = await fetchAllEntries('hero_banner');
    expect(data).toEqual({
      items: mockEntries,
    });
  });

  it('should fetch a single entry and return JSON', async () => {
    const data1 = await fetchEntryByUID('hero_banner', 'entry1');
    expect(data1).toEqual(mockSingleEntry);
  });
});