export default function (state = '0', action) {
  switch (action.type) {
    case 'VALUE_CALCULATOR':
      return action.payload;
    default:
      return state;
  }
}