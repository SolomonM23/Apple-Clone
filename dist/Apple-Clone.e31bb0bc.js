// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("normalize.css");
var menuBtn = document.querySelector('#menu-btn');
var nav = document.querySelector('.navbar');
var subMenu = document.querySelector('.sub-menu-mobile');
var subMenuList = document.querySelectorAll('.sub-menu-mobile a');
var subMenuBackBtn = document.querySelector('#back-btn');
var subMenuSecondary = document.querySelector('.sub-menu-secondary');
var mobileSearchBtn = document.querySelector('.nav-icons .fa-magnifying-glass');
var searchContent = document.querySelector('.search-mobile');
var searchInput = document.querySelector('.search-box input');
var clearInputBtn = document.querySelector('.fa-circle-xmark');
var mobileCartBtn = document.querySelector('.fa-bag-shopping');
var cartContent = document.querySelector('.cart-mobile');

//Show/Hide mobile SubMenu
menuBtn.addEventListener('click', function () {
  // Calculate isExpanded inside the event listener
  var isExpanded = nav.style.height === '100vh';

  // Toggle the height of the nav
  nav.style.height = isExpanded ? '48px' : '100vh';

  // Reveal/hide sub menu when nav height is expanded/collapsed
  if (isExpanded) {
    subMenu.classList.add('hidden');
    subMenuList.forEach(function (item) {
      item.style.opacity = 0;
    });
  } else {
    subMenu.classList.remove('hidden');
    subMenuList.forEach(function (item, index) {
      setTimeout(function () {
        item.style.opacity = 1;
      }, index * 75);
    });
  }

  // Change the menu button icon
  if (isExpanded) {
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
  } else {
    menuBtn.classList.remove('fa-bars');
    menuBtn.classList.add('fa-times');
  }

  // Set the background color based on isExpanded
  if (isExpanded) {
    nav.classList.remove('expanded');
  } else {
    nav.classList.add('expanded');
  }

  // Hide/show nav buttons and logo when nav expanded/collapsed
  var navIcons = document.querySelectorAll('.nav-icons-hide');
  navIcons.forEach(function (element) {
    element.classList.toggle('invisible');
  });

  //Hide sub menu when mobile menu closes
  if (subMenu.classList.contains('sub-menu-mobile-hide-left')) {
    subMenu.classList.remove('sub-menu-mobile-hide-left');
  }

  //Hide back button when sub menu closes
  if (subMenuBackBtn.classList.contains('back-btn-visible')) {
    subMenuBackBtn.classList.remove('back-btn-visible');
  }

  //close search content
  if (!searchContent.classList.contains('hidden')) {
    closeSubMenu();
  }

  //close cart content
  if (!cartContent.classList.contains('hidden')) {
    closeSubMenu();
  }
});
// Function to close mobile the SubMenu
function closeSubMenu() {
  nav.style.height = '48px';
  subMenu.classList.add('hidden');
  searchContent.classList.add('hidden');
  cartContent.classList.add('hidden');
  subMenuList.forEach(function (item) {
    item.style.opacity = 0;
  });
  menuBtn.classList.remove('fa-times');
  menuBtn.classList.add('fa-bars');
  nav.classList.remove('expanded');
  var navIcons = document.querySelectorAll('.nav-icons-hide');
  navIcons.forEach(function (element) {
    element.classList.remove('invisible');
  });
}
// Event listener to auto close mobile SubMenu when vw reaches 735px
window.addEventListener('resize', function () {
  // Get the current viewport width
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the viewport width is 735px or higher
  if (viewportWidth >= 735) {
    // Close the dropdown if it's open
    closeSubMenu();
  }
});

//Hide/show mobile menu content
subMenuList.forEach(function (link) {
  link.addEventListener('click', function () {
    // Get the data-content value from the clicked link
    var contentId = link.getAttribute('data-content');

    // Show the sub-menu-secondary/show back btn
    subMenu.classList.add('sub-menu-mobile-hide-left');
    subMenuSecondary.scrollTop = 0; //content scroll set back to top
    subMenuBackBtn.classList.add('back-btn-visible');

    // Hide all content divs
    document.querySelectorAll('.sub-menu-secondary .content').forEach(function (content) {
      content.style.display = 'none';
    });

    // Show the content div associated with the clicked link
    document.getElementById(contentId + '-content').style.display = 'block';
  });
});
//back button 
subMenuBackBtn.addEventListener('click', function () {
  subMenu.classList.remove('sub-menu-mobile-hide-left');
  subMenuBackBtn.classList.remove('back-btn-visible');
});

//Show/hide mobile search content
mobileSearchBtn.addEventListener('click', function () {
  // Calculate isExpanded inside the event listener
  var isExpanded = nav.style.height === '100vh';

  // Toggle the height of the nav
  nav.style.height = isExpanded ? '48px' : '100vh';

  // Reveal/hide content
  // const elements = document.querySelectorAll('.reveal-element');

  searchContent.classList.remove('hidden');

  // Change the menu button icon
  if (isExpanded) {
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
  } else {
    menuBtn.classList.remove('fa-bars');
    menuBtn.classList.add('fa-times');
  }

  // Set the background color based on isExpanded
  if (isExpanded) {
    nav.classList.remove('expanded');
  } else {
    nav.classList.add('expanded');
  }

  // Hide/show nav buttons and logo when nav expanded/collapsed
  var navIcons = document.querySelectorAll('.nav-icons-hide');
  navIcons.forEach(function (element) {
    element.classList.toggle('invisible');
  });

  //Auto focus input when open
  searchInput.focus();
});
//Search content input 
searchInput.addEventListener('input', function () {
  if (searchInput.value.trim() !== '') {
    clearInputBtn.style.display = 'block'; // Show the clear icon
  } else {
    clearInputBtn.style.display = 'none'; // Hide the clear icon
  }
});
//Empty search input
clearInputBtn.addEventListener('click', function () {
  searchInput.value = ''; // Clear the input
  clearInputBtn.style.display = 'none'; // Hide the clear icon
});

//Show/hide mobile shopping cart
mobileCartBtn.addEventListener('click', function () {
  // Calculate isExpanded inside the event listener
  var isExpanded = nav.style.height === '100vh';

  // Toggle the height of the nav
  nav.style.height = isExpanded ? '48px' : '100vh';

  // Reveal/hide content
  // const elements = document.querySelectorAll('.reveal-element');

  cartContent.classList.remove('hidden');

  // Change the menu button icon
  if (isExpanded) {
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
  } else {
    menuBtn.classList.remove('fa-bars');
    menuBtn.classList.add('fa-times');
  }

  // Set the background color based on isExpanded
  if (isExpanded) {
    nav.classList.remove('expanded');
  } else {
    nav.classList.add('expanded');
  }

  // Hide/show nav buttons and logo when nav expanded/collapsed
  var navIcons = document.querySelectorAll('.nav-icons-hide');
  navIcons.forEach(function (element) {
    element.classList.toggle('invisible');
  });
});
},{"normalize.css":"node_modules/normalize.css/normalize.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62029" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Apple-Clone.e31bb0bc.js.map