interface DefaultStateI {
  loading: boolean;
}

const defaultState: DefaultStateI = {
  loading: false,
};
type PokemonDispatchTypes = {
  type: string;
};
const starshipReducer = (
  state: DefaultStateI = defaultState,
  action: PokemonDispatchTypes
): DefaultStateI => {
  console.log(action);
  return state;
};

export default starshipReducer;
