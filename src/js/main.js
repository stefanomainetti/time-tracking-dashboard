import data from "../../data.json";

const setData = (data, period, previousText) => {
  data.map((item) => {
    document.getElementById(
      `${item.title}-current`
    ).innerHTML = `${item.timeframes[period].current}hrs`;
    document.getElementById(
      `${item.title}-previous`
    ).innerHTML = `${previousText} - ${item.timeframes[period].previous}hrs`;
  });
};

var period = "daily";
var previousText = "Yesterday";

document.getElementById("radio-daily").setAttribute("checked", true);

setData(data, period, previousText);

["click", "keypress"].forEach((evt) => {
  document.getElementById("time-options").addEventListener(evt, (e) => {
    if (e.target && e.target.matches("label")) {
      let period = e.target.getAttribute("id");
      let previousText;
      if (period === "daily") previousText = "Yesterday";
      if (period === "weekly") previousText = "Last Week";
      else previousText = "Last Month";
      setData(data, period, previousText);
      Array.from(document.getElementsByClassName("input-label")).map((item) => {
        item.setAttribute("aria-pressed", "false");
      });
      e.target.setAttribute("aria-pressed", "true");
      if ((evt = "keypress")) {
        e.target.click();
      }
    }
  });
});
