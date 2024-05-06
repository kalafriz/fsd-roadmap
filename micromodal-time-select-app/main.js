const timeZoneElement = document.getElementById("timezone");

timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

timeZoneElement.innerHTML = timeZone;

function updateTimeZone(tz) {
  timeZoneElement.innerHTML = tz;
}
