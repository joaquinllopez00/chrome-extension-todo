import { Item } from '../../types/Items';

export const getItems: () => Promise<Item[]> = async () => {
  try {
    const items = await chrome.storage.local.get(['items']);
    return items?.items;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return [];
  }
};

export const createItem = async (item: Item) => {
  try {
    const items = await chrome.storage.local.get(['items']);
    items.push(item);
    await chrome.storage.local.set({ items: items });
    return items;
  } catch (error) {
    console.error('Failed to create item:', error);
    return [];
  }
};
