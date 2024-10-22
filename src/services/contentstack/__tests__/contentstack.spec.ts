import { fetchAllEntries, fetchEntryByUID } from '../contentstack';
import contentstack from '@contentstack/delivery-sdk';

jest.mock('@contentstack/delivery-sdk', () => {
  const originalModule = jest.requireActual('@contentstack/delivery-sdk');
  return {
    ...originalModule,
    stack: jest.fn(() => ({
      contentType: jest.fn(() => ({
        entry: jest.fn((uid) => ({
          query: jest.fn(() => ({
            find: jest.fn(() => Promise.resolve({ 
              items: [
                {
                  uid: "entry1",
                  banner_title: "Banner Title 1",
                },
                {
                  uid: "entry2",
                  banner_title: "Banner Title 2",
                }
              ] 
            })),
          })),
          fetch: jest.fn(() => Promise.resolve({
            uid: "entry1",
            banner_title: "Banner Title 1",
          })),
        })),
      })),
    })),
  };
});

describe('Contentstack Service', () => {
  it('should fetch all entries and return JSON', async () => {
    const data = await fetchAllEntries('hero_banner');
    console.log('Fetched Entries:', JSON.stringify(data, null, 2));
    expect(data).toEqual({
      items: [
        {
          uid: "entry1",
          banner_title: "Banner Title 1",
        },
        {
          uid: "entry2",
          banner_title: "Banner Title 2",
        }
      ]
    });
  });

  it('should fetch a single entry and return JSON', async () => {
    const data1 = await fetchEntryByUID('hero_banner', 'entry1');
    console.log("Single entry fetched: ", JSON.stringify(data1, null, 2));
    expect(data1).toEqual({
      uid: "entry1",
      banner_title: "Banner Title 1",
    });
  });
});