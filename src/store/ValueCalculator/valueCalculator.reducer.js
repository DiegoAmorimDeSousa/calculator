export default function (state = '', action) {
  switch (action.type) {
    case 'VALUE_CALCULATOR':
      return action.payload;
    default:
      return state;
  }
}