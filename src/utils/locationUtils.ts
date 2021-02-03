const createHistory = require("history").createBrowserHistory;

export const goToPage = (link: string): void => {
  const history = createHistory();
  history.push(link);
  const pathUrl = window.location.href;
  window.location.href = pathUrl;
};
