window.Pamasol.ScrollTo = (function() {

  function ScrollTo(param) {
    if (param === '') {
      this.handleProductionLineUrlParameter(param);
    } else if (typeof param === 'string') {
      this.handleUrlHash(param);
    } else if ($(param).is('select')) {
      this.handleProductionLineDropdownSelection(param);
    } else if (typeof param === 'object') {
      this.handleEvent(param);
    }
  }

  return ScrollTo;

})();
