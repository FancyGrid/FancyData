let random = {
  getValue: function (column, type, item) {
    var data = type.data,
      min = 0,
      max = data.length - 1,
      index = FancyData.getRandomInt(min, max),
      value = data[index];

    if (type.config.waitFor) {
      index = column.index || column.type;

      if (item[index]) {
        value = item[index];
      }
    }

    return value;
  }
};

export default random;