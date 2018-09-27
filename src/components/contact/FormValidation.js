export const isEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
export const isName = name => {
  const re = /^[A-Za-z ]+$/;
  return re.test(name);
};

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && value.trim().length === 0);
