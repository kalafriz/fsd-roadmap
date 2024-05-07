var DateTime = luxon.DateTime;

const timeZoneElement = document.getElementById("timezone");
const userTimeElement = document.getElementById("userTime");
const userDateElement = document.getElementById("userDate");
const timeZoneSelect = document.getElementById("timezone-offset");

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
timeZoneSelect.value = userTimeZone;
timeZoneElement.innerHTML = userTimeZone;

function updateDateTime() {
  // DateTime is immutable-- need to create new instance
  tz = timeZoneSelect.value;
  var rezoned = DateTime.local().setZone(tz);

  timeZoneElement.innerHTML = rezoned.zoneName;
  userTimeElement.innerHTML = rezoned.toLocaleString(
    DateTime.TIME_24_WITH_SECONDS
  );
  userDateElement.innerHTML = rezoned.toLocaleString(DateTime.DATE_HUGE);
}
updateDateTime();

setInterval(updateDateTime, 1000);
