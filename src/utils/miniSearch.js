const search = (data, text, fields) => {
  const regExp = new RegExp(text, 'i');
  return data.filter(o => {
    for (let i = 0; i < fields.length; i++) {
      const param = o[fields[i]];
      if (typeof param === 'string' && regExp.test(param)) {
        return true;
      }
    }
    return false;
  });
};

export default search;
