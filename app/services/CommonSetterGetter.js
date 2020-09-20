/* eslint-disable no-underscore-dangle */
export const setLoclStoreArry = params => {
  params.map(ele => {
    const _key = Object.keys(ele);
    return window.localStorage.setItem(_key, ele[_key]);
  });
};

export const getFromLocalStore = key => {
  const object = {};
  const storage = window.localStorage;
  const storageKeys = Object.keys(storage);
  key.map(ele => {
    if (storageKeys.includes(ele)) {
      object[ele] = ['null', 'undefined'].includes(storage[ele])
        ? null
        : storage[ele];
    }
    return object;
  });
  return object;
};
