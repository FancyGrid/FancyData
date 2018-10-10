let rangedate = {
  getValue: function(column, type){
    var min,
      max,
      format;

    min = column.min || type.config.min;
    max = column.max || type.config.max;
    format = column.format || type.config.format;

    min = Number(min);
    max = Number(max);

    var value = FancyData.getRandomInt(min, max);

    value = FancyData.format(new Date(value), format);

    return value;
  }
};

export default rangedate;