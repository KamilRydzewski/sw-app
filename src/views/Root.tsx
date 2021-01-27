import BaseCard from "../components/baseUI/BaseCard/BaseCard";
import { Provider } from "react-redux";
import Store from "../store/index";

function Root() {
  return (
    <Provider store={Store}>
      <BaseCard></BaseCard>
    </Provider>
  );
}

export default Root;
