const _history = history || window.history;

export default {
  push(param, title, path) {
    if (_history) {
      _history.pushState(param, title, path);
    }
  },
  back() {
    if (_history) {
      _history.back();
    }
  },
  forward() {
    if (_history) {
      _history.forward();
    }
  },
  goReplace(param, title, path) {
    if (_history) {
      _history.replaceState(param, title, path);
    }
  }
};
