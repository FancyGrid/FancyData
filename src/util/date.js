let lang = {
  read: 'm/d/Y',
  write: 'm/d/Y',
  edit: 'm/d/Y',
  today: 'Today',
  startDay: 0,
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  am: 'am',
  pm: 'pm',
  AM: 'AM',
  PM: 'PM',
  ok: 'OK',
  cancel: 'Cancel'
};

let format = function(date, format){
	var lang = FancyData.lang;
	
    var value = '',
      h,
      _i,
      D,
      l,
      N,
      w,
      F,
      M,
      t,
      g,
      H,
      u,
      U,
      d,
      m,
      mode = mode || '';

    mode = mode.toLocaleLowerCase();

    var i = 0,
      iL = format.length;

    for(;i<iL; i++){
      var c = format[i];

      switch (c) {
        case 'i':
          _i = date.getMinutes();

          if (_i < 10) {
            value += '0' + _i;
          } else {
            value += _i;
          }

          break;
        case 's':
          _i = date.getSeconds();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'ss'){
              if (_i < 10) {
                value += '0' + _i;
              } else {
                value += _i;
              }

              i++;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            if (_i < 10) {
              value += '0' + _i;
            } else {
              value += _i;
            }
          }
          break;
        case 'S':
          _i = date.getSeconds();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'SS'){
              if (_i < 10) {
                value += '0' + _i;
              } else {
                value += _i;
              }

              i++;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
          }
          break;
        case 'a':
          h = date.getHours();

          if (h < 13) {
            value += lang.am;
          } else {
            value += lang.pm;
          }

          break;
        case 'A':
          h = date.getHours();

          if (h < 13) {
            value += lang.AM;
          } else {
            value += lang.PM;
          }

          break;
        case 'n':
          value += date.getMonth();
          break;
        case 'j':
          value += date.getDate();
          break;
        case 'm':
          m = date.getMonth() + 1;

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'mm'){
              if (m < 10) {
                m = '0' + m;
              }
              value += m;
              i++;
            }
            else if(format.substr(i, 2) === 'mi'){
              _i = date.getMinutes();

              if (_i < 10) {
                value += '0' + _i;
              } else {
                value += _i;
              }
              i++;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            if (m < 10) {
              m = '0' + m;
            }
            value += m;
          }
          break;
        case 'd':
          d = date.getDate();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'dd'){
              if (d < 10) {
                d = '0' + d;
              }

              value += d;
              i++;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            if (d < 10) {
              d = '0' + d;
            }

            value += d;
          }
          break;
        case 'Y':
          if(mode === 'sql'){
            if(format.substr(i, 4) === 'YYYY'){
              value += date.getFullYear();
              i += 3;
            }
            else if(format.substr(0, 2) === 'YY'){
              String(date.getFullYear()).substr(2, value.length);
              i += 1;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            value += date.getFullYear();
          }
          break;
        case 'y':
          if(mode === 'sql'){
            if(format.substr(i, 4) === 'yyyy'){
              value += date.getFullYear();
              i += 3;
            }
            else if(format.substr(0, 2) === 'yy'){
              String(date.getFullYear()).substr(2, value.length);
              i += 1;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            value += String(date.getFullYear()).substr(2, value.length);
          }
          break;
        case 'D':
          D = date.getDay();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'DD'){
              value += lang.days[D].substr(0, 3);
              i++;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            value += lang.days[D].substr(0, 3);
          }
          break;
        case 'l':
          l = date.getDay();

          value += lang.days[l];
          break;
        case 'N':
          N = date.getDay();

          if (N === 0) {
            N = 7;
          }

          value += N;
          break;
        case 'w':
          w = date.getDay();

          value += w;
          break;
        case 'F':
          F = date.getMonth();
          value += lang.months[F];
          break;
        case 'M':
          M = date.getMonth();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'MM'){
              value += lang.months[M].substr(0, 3);
              i += 1;
            }
            else if(format.substr(i, 2) === 'MI'){
              _i = date.getMinutes();

              if (_i < 10) {
                value += '0' + _i;
              } else {
                value += _i;
              }

              i++;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            value += lang.months[M].substr(0, 3);
          }
          break;
        case 't':
          if(mode === 'sql'){
            value += ' ';
          }
          else{
            t = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            value += t;
          }
          break;
        case 'T':
          if(mode === 'sql'){
            value += ' ';
          }
          else{
            throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
          }
          break;
        case 'g':
          g = date.getHours() % 12;

          value += g;
          break;
        case 'G':
          g = date.getHours();

          value += g;
          break;
        case 'h':
          h = date.getHours();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'hh'){
              if (h > 12) {
                value += h - 12;
              } else if (h > 9 && h < 13) {
                value += h;
              } else {
                value += '0' + h;
              }

              i += 1;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            if (h > 12) {
              value += h - 12;
            } else if (h > 9 && h < 13) {
              value += h;
            } else {
              value += '0' + h;
            }
          }
          break;
        case 'H':
          H = date.getHours();

          if(mode === 'sql'){
            if(format.substr(i, 2) === 'HH'){
              if(H < 10){
                value += '0' + H;
              } else {
                value += H;
              }

              i += 1;
            }
            else{
              throw new Error('[FancyGrid Error] - Invalid date format: ' + format);
            }
          }
          else {
            if(H < 10){
              value += '0' + H;
            } else {
              value += H;
            }
          }
          break;
        case 'u':
          u = date.getMilliseconds();

          value += u;
          break;
        case 'U':
          U = Number(date) / 1000;

          value += U;
          break;
        default:
          value += c;
      }
    }

    return value;
};

export {
  lang,
  format
}