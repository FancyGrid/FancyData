let increment = {
  getValue: function(column, type){
    var value;

    if(type.state.value === undefined){
      type.state.value = type.config.min;
      value = type.state.value;
    }
    else{
      type.state.value = type.state.value + 1;
      value = type.state.value;
    }

    return value;
  }
};

export default increment;