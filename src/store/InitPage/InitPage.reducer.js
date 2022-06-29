export default function (state = 'icon', action) {
  switch (action.type) {
    case 'INIT_PAGE':
      return action.payload;
    default:
      return state;
  }
}