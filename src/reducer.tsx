export const initialState = {
  name: "Sahil",
  age: 20,
};

export type actionType =
  | {
      type: "CHANGE_NAME";
      payload: string;
    }
  | {
      type: "CHANGE_AGE";
      payload: number;
    };

export const reducer = (state: typeof initialState, action: actionType) => {
  if (action.type == "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type == "CHANGE_AGE") {
    return {
      ...state,
      age: action.payload,
    };
  }
  return state;
};
