let email = {
  getValue: function(column, type, item){
    if(!item.name || !item.surname){
      return '';
    }

    var value,
      site = column.site || type.config.site,
      name = item.name.toLowerCase(),
      surname = item.surname.toLowerCase();

    value = name + '.' + surname + '@' + site;

    return value;
  }
};

export default email;