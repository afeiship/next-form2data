# next-form2data
> FormData to js data.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-form2data
```

## usage
```js
// DO NOT USE in NODE ENV (because: form-data package has bug.)
import nxForm2Data from '@jswork/next-form2data';

const formData = new FormData();
formData.append('u', 'username');
formData.append('p', 'pass1');
nx.form2data(formData);

// { u: 'username', p: 'pass1' }
```

## required
- Array.from
- Browser FormData

## resources
- https://stackoverflow.com/questions/41431322/how-to-convert-formdatahtml5-object-to-json

## license
Code released under [the MIT license](https://github.com/afeiship/next-form2data/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-form2data
[version-url]: https://npmjs.org/package/@jswork/next-form2data

[license-image]: https://img.shields.io/npm/l/@jswork/next-form2data
[license-url]: https://github.com/afeiship/next-form2data/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-form2data
[size-url]: https://github.com/afeiship/next-form2data/blob/master/dist/next-form2data.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-form2data
[download-url]: https://www.npmjs.com/package/@jswork/next-form2data
