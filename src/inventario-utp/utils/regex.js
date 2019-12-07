const valid_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const valid_string = RegExp(/^[A-Za-z\s]+$/);
var valid_precio = RegExp(/^\d{1,}(\.\d{0,2})?$/);

const valid_cedula = cedula => {
  // eslint-disable-next-line
  Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
  };

  var re = /^P$|^(?:PE|E|N|[23456789]|[23456789](?:A|P)?|1[0123]?|1[0123]?(?:A|P)?)$|^(?:PE|E|N|[23456789]|[23456789](?:AV|PI)?|1[0123]?|1[0123]?(?:AV|PI)?)-?$|^(?:PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(?:\d{1,4})-?$|^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/i;

  var matched = cedula.match(re);
  var isComplete = false;

  if (matched !== null) {
    matched.splice(0, 1);

    if (matched[0] !== undefined) {
      isComplete = true;

      if (matched[0].match(/^PE|E|N$/)) {
        matched.insert(0, "0");
      }

      if (matched[0].match(/^(1[0123]?|[23456789])?$/)) {
        matched.insert(1, "");
      }

      if (matched[0].match(/^(1[0123]?|[23456789])(AV|PI)$/)) {
        var tmp = matched[0].match(/(\d+)(\w+)/);

        matched.splice(0, 1);
        matched.insert(0, tmp[1]);
        matched.insert(1, tmp[2]);
      }
    }
  }

  var result = {
    isValid: cedula.length === 0 ? true : re.test(cedula),
    inputString: cedula,
    isComplete: isComplete,
    cedula: isComplete ? matched.splice(0, 4) : null
  };

  if (result.isValid === true && result.isComplete === true) {
    return true;
  } else {
    return false;
  }
};

export { valid_email, valid_string, valid_precio, valid_cedula };
