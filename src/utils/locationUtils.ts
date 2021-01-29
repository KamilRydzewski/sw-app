const createHistory = require("history").createBrowserHistory;

export const goToPage = (link: string) => {
  let history = createHistory();
  history.push(link);
  let pathUrl = window.location.href;
  window.location.href = pathUrl;
};
