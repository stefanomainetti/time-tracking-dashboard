(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

},{}],2:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("../../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setData = (data, period, previousText) => {
  data.map(item => {
    document.getElementById(`${item.title}-current`).innerHTML = `${item.timeframes[period].current}hrs`;
    document.getElementById(`${item.title}-previous`).innerHTML = `${previousText} - ${item.timeframes[period].previous}hrs`;
  });
};

var period = "daily";
var previousText = "Yesterday";
console.log(document.getElementById("radio-daily"));
document.getElementById("radio-daily").setAttribute("checked", true);
setData(_data.default, period, previousText);
["click", "keypress"].forEach(evt => {
  document.getElementById("time-options").addEventListener(evt, e => {
    if (e.target && e.target.matches("label")) {
      let period = e.target.getAttribute("id");
      let previousText;
      if (period === "daily") previousText = "Yesterday";
      if (period === "weekly") previousText = "Last Week";else previousText = "Last Month";
      setData(_data.default, period, previousText);
      Array.from(document.getElementsByClassName("input-label")).map(item => {
        item.setAttribute("aria-pressed", "false");
      });
      e.target.setAttribute("aria-pressed", "true");

      if (evt = "keypress") {
        e.target.click();
      }
    }
  });
});

},{"../../data.json":1}]},{},[2]);
