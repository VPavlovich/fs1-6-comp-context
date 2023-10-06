import { useReducer } from "react";

import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
//

const LIST_ACTION_TYPE = {
  ADD: "add",
  DELETE: "delete",
  SELECT: "select",
  REVERSE:  "reverse",
}

function listReducer(state, action) {
  switch (action.type) {
    case LIST_ACTION_TYPE.ADD:
      const id = new Date().getTime();
      const newItem = { value: action.payload, id };

      return {
        ...state,
        items: [...state.items, newItem],
      };

      case LIST_ACTION_TYPE.DELETE:
        const newItems = state.items.filter((item) => item.id !== action.payload );

        return {
          ...state,
          items: newItems,
        }

      case LIST_ACTION_TYPE.SELECT:
        return {
          ...state,
          selectedId: action.payload === state.selectedId ? null : action.payload,
        };

        case LIST_ACTION_TYPE.REVERSE:
          return {
            ...state,
            items: state.items.reverse()
          }

  }

  return {...state};
}

const initState = { items: [] };

function App() {
  const init = (state) => {
    if (state.items && state.items.length === 0){
      return {
        ...state,
        items: [{ id: 432312, value: "first item" }],
      };
    } else {
      return state;
    }
  }

  console.log("render");
  const [state, dispatch] = useReducer(listReducer, initState, init);

  const handleAddItem = (e) => {
    const { value } = e.target;

    if (value.trim() === "") return null;

    dispatch({ type: LIST_ACTION_TYPE.ADD, payload: value });

  };

  
  return (
    <Page>
      <Grid>
        <Box>
          <h1>Список елементів</h1>
            <ul>
              {state.items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button>Видалити</button>
                </li>
              ))}
            </ul>
        </Box>
        <Box>
          <input 
            onBlur={handleAddItem}
            type='text' 
            placeholder="Введіть новий елемент"></input>
        </Box>
      </Grid>
    </Page>
  );
}



export default App;
//40
