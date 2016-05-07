export default function reducer_active_book(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
