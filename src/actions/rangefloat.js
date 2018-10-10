let rangefloat = {
  getValue: function(column, type){
    var min,
      max,
      presition = type.config.presition,
      value;

    if(column.presition !== undefined){
      presition = column.presition;
    }

    if(column.min){
      min = column.min;
    }
    else{
      min = type.config.min;
    }

    if(column.max){
      max = column.max;
    }
    else{
      max = type.config.max;
    }

    value = Number(FancyData.getRandomArbitrary(min, max).toFixed(presition));

    return value;
  }
};

export default rangefloat;