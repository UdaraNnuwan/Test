const src = {
  prop11: {
      prop21: 21,
      prop22: {
          prop31: 31,
          prop32: 32,
      },
  },
  prop12: 12,
};
const proto = {
  prop11: {
      prop22: null,
  },
};

const mapObject = (srcObj, protoObj) => {
  if (typeof protoObj !== "object" || protoObj === null) return undefined;
  const result = {};
  Object.keys(protoObj).forEach(key => {
    if (key in srcObj) {
      if (typeof protoObj[key] === "object" && protoObj[key] !== null) {
        result[key] = mapObject(srcObj[key], protoObj[key]);
      } else {
        result[key] = srcObj[key];
      }
    }
  });
  return result;
};

const result=mapObject(src,proto)
console.log(result)