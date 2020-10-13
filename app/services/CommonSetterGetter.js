/* eslint-disable no-underscore-dangle */
import { ENG } from '../constants/english';
import { HIN } from '../constants/hindi';
import { GUJ } from '../constants/gujurati';
import { MHA } from '../constants/marathi';
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
      object[ele] = ['null', 'undefined', ''].includes(storage[ele])
        ? null
        : storage[ele];
    }
    return object;
  });
  return object;
};

export const language = () => {
  let intel;
  const lang = window.localStorage.getItem('lang') || 'EN';
  if (['EN'].includes(lang)) {
    intel = ENG;
  } else if (['HI'].includes(lang)) {
    intel = HIN;
  } else if (['GU'].includes(lang)) {
    intel = GUJ;
  } else if (['MH'].includes(lang)) {
    intel = MHA;
  } else {
    intel = ENG;
  }
  return intel;
};
