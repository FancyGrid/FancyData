# FancyData

FancyData - JavaScript Mockup Data Generation Library

## *Install*
```
npm install fancy-data
```
  
## *Include*
```
<script src="/dist/bundle.min.js"></script>
```
  
### *CDN*
```
<script src="https://cdn.fancygrid.com/fancydata.min.js"></script>
```

#### *Sample*
```js
new FancyData({
  rows: 1000000,
  indexes: ['id', 'name', 'surname', 'country', 'position', 'email', 'age'],
  columns: [{
    type: 'id',
    index: 'id'
  },{
    type: 'name',
    index: 'name'
  },{
    type: 'surname',
    index: 'surname'
  },{
    type: 'country-rich',
    index: 'country'
  },{
    type: 'it-position',
    index: 'position'
  },{
    type: 'email',
    index: 'email',
    site: 'google.com'
  },{
    type: 'age',
    min: 20,
    max: 45,
    index: 'age'
  }]
}).getData({
  on1000: function(generated, percents, total){
    console.log(generated, percents, total)
  },
  onFinished: function(data){
    console.log('onFinished', data);
  }
});
```
  
### *Core Properties*
| Name | Type | Description |
| --- | --- | --- |
| `columns` | Array | List with columns config |
| `indexes` | Array | Data indexes, if not provided than it data could contain more options than columns |
| `rows` | Number | Number of data rows |

### *Column types*

#### *age*
 Age range value from min and max values.  
By default min is 0 and max is 100.  

##### *Properties*

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `max` | Number |
| `min` | Number |

##### *Sample*
```
{
  type: 'age',
  min: 20,
  max: 45,
  index: 'age'
}
```

#### *boolean*
Boolean value true or false.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'boolean',
  index: 'married'
}
```

#### *company*
Random company from small list.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'company',
  index: 'company'
}
```

#### *country*
Random country from almost all countries list.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'country',
  index: 'country'
}
```

#### *country-rich*
Random rich country.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'country-rich',
  index: 'country'
}
```

#### *date*
Date value in format 'm.d.Y' by default between min 1970.1.1 and current date.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `format` | String |
| `min` | Number |
| `max` | Number |

##### Sample
```
{
  type: 'date',
  index: 'birthday',
  format: 'm/d/Y',
  min: new Date(1980, 1, 7)
}
```

#### *email*
 Person email on base of 'name', 'surname', 'site'.
'site' is column property but name and surname must be extra columns.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `tpl` | String |
| `site` | Number |
| `max` | Number |

##### Sample
```
{
  type: 'email',
  index: 'email',
  site: 'google.com'
}
```

#### *float*
 Float number value with presition between range.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `presition` | Number |
| `min` | Number |
| `max` | Number |

##### Sample
```
{
  type: 'float',
  index: 'bank_balance',
  presition: 2,
  min: 0,
  max: 150000
}
```

#### *fortune100*
 Company from fortune 100 list.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'fortune100',
  index: 'company'
}
```

#### *fortune500*
 Company from fortune 500 list.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'fortune500',
  index: 'company'
}
```

#### *gender*
 Person gender, possible values: 'male'|'female'.  
Requires extra column name.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'fortune500',
  index: 'company'
}
```

#### *id*
 Incremental id value start from 1 by default.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `min` | Number |

##### Sample
```
{
  type: 'fortune500',
  index: 'company'
}
```

#### *int*
 Integer number value between range.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `min` | Number |
| `max` | Number |

##### Sample
```
{
  type: 'int',
  index: 'value',
  min: 1000,
  max: 100000
}
```

#### *it-level*
 Proffesional person level.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'it-level',
  index: 'level'
}
```

#### *it-position*
 Person position in tech sphere.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'it-level',
  index: 'level'
}
```

#### *name*
 Person name.
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'name',
  index: 'name'
}
```

#### *salary-year*
 Person salary per year in range
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |
| `min` | Number |
| `max` | Number |

##### Sample
```
{
  type: 'salary-year',
  index: 'salary'
}
```

#### *surname*
 Person surname
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'surname',
  index: 'surname'
}
```

#### *usa-state*
 Random USA state
##### Properties

| Name | Type |
| --- | --- |
| `type` | String |
| `index` | String |

##### Sample
```
{
  type: 'usa-state',
  index: 'state'
}
```