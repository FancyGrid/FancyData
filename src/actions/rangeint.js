let rangeint = {
  getValue: function(column, type){
    var min,
      max;

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

    return FancyData.getRandomInt(min, max);
  }
};

export default rangeint;