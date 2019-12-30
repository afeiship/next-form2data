# next-form2data
> FormData to js data.

## installation
```bash
npm install -S @feizheng/next-form2data
```

## usage
```js
import '@feizheng/next-form2data';

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

## resources
- https://stackoverflow.com/questions/41431322/how-to-convert-formdatahtml5-object-to-json
