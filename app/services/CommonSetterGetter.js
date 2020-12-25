/* eslint-disable no-underscore-dangle */
import { ENG } from '../constants/english';
import { HIN } from '../constants/hindi';
import { GUJ } from '../constants/gujurati';
import { MHA } from '../constants/marathi';
import { ASH } from '../constants/ashami';
import { BEN } from '../constants/bengali';
import { MAL } from '../constants/malyalam';
import { ODI } from '../constants/odiya';
import { TAM } from '../constants/tamil';
import { TEL } from '../constants/telugu';
export const setLoclStoreArry = params => {
  params.map(ele => {
    const _key = Object.keys(ele);
    return window.localStorage.setItem(_key, ele[_key]);
  });
};
export const setSessionStoreArry = params => {
  params.map(ele => {
    const _key = Object.keys(ele);
    return window.sessionStorage.setItem(_key, ele[_key]);
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

// export const language = () => {
//   let intel;
//   const lang = window.localStorage.getItem('lang') || 'EN';
//   if (['EN'].includes(lang)) {
//     intel = ENG;
//   } else if (['HI'].includes(lang)) {
//     intel = HIN;
//   } else if (['GU'].includes(lang)) {
//     intel = GUJ;
//   } else if (['MH'].includes(lang)) {
//     intel = MHA;
//   } else {
//     intel = ENG;
//   }
//   return intel;
// };
export const languageString = params => {
  let intel;
  const lang = window.sessionStorage.getItem('lang') || 'EN';
  if (['EN'].includes(lang)) {
    const { string } = ENG || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['HI'].includes(lang)) {
    const { string } = HIN || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['GU'].includes(lang)) {
    const { string } = GUJ || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['MH'].includes(lang)) {
    const { string } = MHA || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['TA'].includes(lang)) {
    const { string } = TAM || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['ML'].includes(lang)) {
    const { string } = MAL || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['TE'].includes(lang)) {
    const { string } = TEL || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['BN'].includes(lang)) {
    const { string } = BEN || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['OR'].includes(lang)) {
    const { string } = ODI || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else if (['AS'].includes(lang)) {
    const { string } = ASH || {};
    const findValue = string.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.__text;
  } else {
    intel = ENG;
  }
  return intel;
};
export const languageConfig = params => {
  let intel;
  const lang = window.localStorage.getItem('lang') || 'EN';
  if (['EN'].includes(lang)) {
    const { stringArray } = ENG || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['HI'].includes(lang)) {
    const { stringArray } = HIN || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['GU'].includes(lang)) {
    const { stringArray } = GUJ || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['MH'].includes(lang)) {
    const { stringArray } = MHA || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['TA'].includes(lang)) {
    const { stringArray } = TAM || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['ML'].includes(lang)) {
    const { stringArray } = MAL || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['TE'].includes(lang)) {
    const { stringArray } = TEL || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['BN'].includes(lang)) {
    const { stringArray } = BEN || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['OR'].includes(lang)) {
    const { stringArray } = ODI || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else if (['AS'].includes(lang)) {
    const { stringArray } = ASH || {};
    const findValue = stringArray.find(item => {
      const { _name: name } = item || {};
      return name === params;
    });
    intel = findValue.item;
  } else {
    intel = ENG;
  }
  return intel;
};
