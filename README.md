# FancyData

FancyData - JavaScript Mockup Data Generation Library
  
## Install


#### *Sample*
```
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