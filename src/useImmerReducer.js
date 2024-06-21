import { useReducer } from 'react';
import { produce } from 'immer'; // Correctly import produce

const useImmerReducer = (reducer, initialState) => {
  return useReducer(produce(reducer), initialState);
};

export default useImmerReducer;
