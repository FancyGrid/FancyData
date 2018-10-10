import email from "./actions/emails";
import increment from "./actions/increment";
import random from "./actions/random";

import rangedate from "./actions/rangedate";
import rangefloat from "./actions/rangefloat";
import rangeint from "./actions/rangeint";
import {lang, format} from "./util/date";
import {getRandomInt, getRandomArbitrary} from "./util/math";
import {isObject} from "./util/typeof";

import {default as ageType} from "./types/age";
import {default as booleanType} from "./types/boolean";
import {default as companyType} from "./types/company";
import {default as dateType} from "./types/date";
import {default as emailType} from "./types/email";
import {default as floatType} from "./types/float";
import {default as fortune100Type} from "./types/fortune100";
import {default as fortune500Type} from "./types/fortune500";
import {default as genderType} from "./types/gender";
import {default as idType} from "./types/id";
import {default as intType} from "./types/int";
import {default as itLevelType} from "./types/it-level";
import {default as itPositionType} from "./types/it-position";
import {default as nameType} from "./types/name";
import {default as positionType} from "./types/position";
import {default as richCountryType} from "./types/rich-country";
import {default as salaryYearType} from "./types/salary-year";
import {default as surnameType} from "./types/surname";
import {default as usaStatesType} from "./types/usa-states";

let FancyData = function(config) {
  for(let p in config) {
    this[p] = config[p];
  }
};

FancyData.actions = {
  email: email,
  increment: increment,
  random: random,
  rangedate: rangedate,
  rangefloat: rangefloat,
  rangeint: rangeint
};

FancyData.lang = lang;
FancyData.format = format;
FancyData.getRandomInt = getRandomInt;
FancyData.getRandomArbitrary = getRandomArbitrary;
FancyData.isObject = isObject;

FancyData.addType = function (name, options) {
  FancyData.types[name] = options;
};

FancyData.types = {
  age: ageType,
  boolean: booleanType,
  company: companyType,
  date: dateType,
  email: emailType,
  float: floatType,
  fortune100: fortune100Type,
  fortune500: fortune500Type,
  gender: genderType,
  id: idType,
  int: intType,
  "it-level": itLevelType,
  "it-position": itPositionType,
  name: nameType,
  position: positionType,
  "country-rich": richCountryType,
  "salary-year": salaryYearType,
  surname: surnameType,
  "usa-states": usaStatesType
};

FancyData.prototype.getData = function(o) {
  var me = this,
    on1000 = function () {},
    onFinished = function () {};

  if(o && o.on1000){
    on1000 = o.on1000;
  }

  if(o && o.onFinished){
    onFinished = o.onFinished;
  }

  me.dropStates();

  var rows = me.rows || 100,
    onePercent = rows/100,
    columns = me.orderByPriority(me.columns),
    indexes = me.indexes,
    i = 0,
    data = [];

  var generate = function() {
    var iL = i + 1000;

    if(iL > rows){
      iL = rows;
    }

    for(;i<iL;i++){
      var item = {},
        j = 0,
        jL = columns.length;

      for (; j < jL; j++) {
        var column = columns[j],
          value = me.generateValue(column, item);

        if (!FancyData.isObject(value)) {
          item[column.index || column.type] = value;
        }
        else {
          for (var p in value) {
            if (p === 'value') {
              item[column.index || column.type] = value[p];
            } else {
              item[p] = value[p];
            }
          }
        }
      }

      data.push(item);
    }

    on1000(i, parseInt(i/onePercent), rows);
  };

  var interval = setInterval(function () {
    generate();

    if(i === rows){
      clearInterval(interval);
      onFinished(data);
    }
  }, 0);

  if (indexes) {
    data = me.cleanData(data, indexes);
  }

  return data;
};

FancyData.prototype.getHTML = function(data) {
  var value = JSON.stringify(data);

  value = value.replace(/\},\{/g, '},<br>&nbsp;&nbsp;{');
  value = value.replace(/\[\{/, '[<br>&nbsp;&nbsp;{');
  value = value.replace(/\}\]/, '}<br>]');

  return value;
};

FancyData.prototype.getSQL = function(table, newTable) {
  var data = this.getData(),
    columns = this.columns,
    column,
    field,
    fields = this.getFields(columns),
    sql = '',
    i = 0,
    iL = fields.length;

  if (newTable) {
    sql += 'CREATE TABLE `' + table + '` (';

    for (; i < iL; i++) {
      column = columns[i];
      field = fields[i];

      switch (column.type) {
        case 'id':
        case 'age':
        case 'boolean':
        case 'float':
        case 'int':
        case 'salary-year':
          sql += '`' + field + '` INT, ';
          break;
        default:
          sql += '`' + field + '` VARCHAR(50), ';
      }
    }

    sql = sql.replace(/, $/, '');

    sql += ');\n';
  }

  i = 0;
  iL = data.length;

  for (; i < iL; i++) {
    var itemData = data[i],
      valuesSQL = '',
      j = 0,
      jL = fields.length;

    for (; j < jL; j++) {
      column = columns[j];

      switch (column.type) {
        case 'id':
        case 'age':
        case 'boolean':
        case 'float':
        case 'int':
        case 'salary-year':
          valuesSQL += itemData[fields[j]] + ', ';
          break;
        default:
          valuesSQL += '"' + itemData[fields[j]] + '", ';
      }
    }
    valuesSQL = valuesSQL.replace(/, $/, '');

    sql += 'INSERT INTO ' + table + ' (' + (fields.toString().replace(/,/g, ', ')) + ') VALUES (' + valuesSQL + ');';
    sql += '\n';
  }

  return sql;
};

FancyData.prototype.getJSON = function(data, callback) {
  if (callback) {
    return callback + '(' + JSON.stringify(data) + ')';
  }

  return JSON.stringify(data);
};

FancyData.prototype.cleanData = function(data, indexes) {
  var map = {},
    i = 0,
    iL = indexes.length;

  for (; i < iL; i++) {
    map[indexes[i]] = true;
  }

  i = 0;
  iL = data.length;

  for (; i < iL; i++) {
    var item = data[i];

    for (var p in item) {
      if (!map[p]) {
        delete item[p];
      }
    }

    data[i] = item;
  }

  return data;
};

FancyData.prototype.orderByPriority = function(columns) {
  var i = 0,
    iL = columns.length,
    column,
    highPriority = [],
    lowPriority = [],
    waits = {};

  for (; i < iL; i++) {
    column = columns[i];
    var type = FancyData.types[column.type];

    if (type.config.waitFor) {
      waits[column.waitFor] = true;
    }

    if (type.config.required) {
      if (Array.isArray(type.config.required)) {
        var j = 0,
          jL = type.config.required.length;

        for (; j < jL; j++) {
          waits[type.config.required[j]] = true;
        }
      } else {
        waits[type.config.required] = true;
      }
    }
  }

  i = 0;

  for (; i < iL; i++) {
    column = columns[i];
    var index = column.index || column.type;

    if (waits[index]) {
      highPriority.push(column);
    } else {
      lowPriority.push(column);
    }
  }

  return highPriority.concat(lowPriority);
};

FancyData.prototype.dropStates = function() {
  for (var p in FancyData.types) {
    FancyData.types[p].state = {};
  }
};

FancyData.prototype.generateValue = function(column, item) {
  var type = FancyData.types[column.type],
    actionType = type.config.action,
    action = FancyData.actions[actionType],
    value = action.getValue(column, type, item);

  if (column.empty) {
    if (column.empty <= FancyData.getRandomInt(1, 100)) {
      return;
    }
    else {
      return '';
    }
  }

  return value;
};

FancyData.prototype.getFields = function(columns) {
  var fields = [],
    i = 0,
    iL = columns.length;

  for (; i < iL; i++) {
    var column = columns[i];

    fields.push(column.index || column.type);
  }

  return fields;
};

export default FancyData;
