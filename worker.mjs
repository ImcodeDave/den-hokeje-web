const BASE_PATH = '/perinvest_hockey_day/rozhovor-adam-saffer';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === BASE_PATH) {
      url.pathname = BASE_PATH + '/';
      return Response.redirect(url.href, 308);
    }

    if (url.pathname.startsWith(BASE_PATH + '/')) {
      url.pathname = url.pathname.slice(BASE_PATH.length);
    }

    if (url.pathname === '/') {
      url.pathname = '/index.html';
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
