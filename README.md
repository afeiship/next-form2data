# next-form2data
> FormData to js data.

## installation
```bash
npm install -S afeiship/next-form2data --registry=https://registry.npm.taobao.org
```

## usage
```js
//DOCS here!
// DO NOT USE in NODE ENV (because: form-data package has bug.)
import nxForm2Data from 'next-form2data';

const formData = new FormData();
formData.append('u', 'username');
formData.append('p', 'pass1');
nx.form2data(formData);

// { u: 'username', p: 'pass1' }
```

## required
- Array.from
- Browser FormData
