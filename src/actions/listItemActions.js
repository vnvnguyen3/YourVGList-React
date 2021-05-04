import { FETCH_LISTITEMS, NEW_LISTITEM } from './types';

export const fetchListItems = () => dispatch => {
    fetch("http://localhost:8080/listItems")
        .then(res => res.json())
        .then(listItems => dispatch({
            type: FETCH_LISTITEMS,
            payload: listItems
        }));
}

export const createListItem = (listItemData) => dispatch => {
    fetch('http://localhost:8080/add/listItem', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(listItemData)
    })
        .then(res => res.json())
        .then(listItem => dispatch({
            type: NEW_LISTITEM,
            payload: listItem
        }))
}