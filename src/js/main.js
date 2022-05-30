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

document.getElementById("daily").setAttribute("checked", true);

setData(data, period, previousText);

document.getElementById("time-options").addEventListener("click", (e) => {
  if (e.target && e.target.matches("input[type=radio]")) {
    var period = e.target.getAttribute("id");
    let previousText;
    if (period === "daily") previousText = "Yesterday";
    if (period === "weekly") previousText = "Last Week";
    else previousText = "Last Month";
    setData(data, period, previousText);
  }
});
