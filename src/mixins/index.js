const checkValidNumber = (event) => {
  const specialKeyCodes = [8, 9, 13, 46, 37, 39]; // backspace, enter, tab, delete, arrow left. arrow right
  const ctrlCombines = [65, 67, 86, 88]; // ctrl A, ctrl C, ctrl V, ctrl X
  const countryKeyCodes = [231]; // country keyboards on window: vietnamese
  if (
    !event.shiftKey &&
    ((event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 96 && event.keyCode <= 105) ||
      (event.ctrlKey && ctrlCombines.includes(event.keyCode)) ||
      specialKeyCodes.includes(event.keyCode) ||
      (countryKeyCodes.includes(event.keyCode) &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+event.key)))
  ) {
    return true;
  }
  return event.preventDefault();
};

const mixin = {
  methods: {
    checkValidNumber,
  },
};

export default mixin;

export { checkValidNumber };
