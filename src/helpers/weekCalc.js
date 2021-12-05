function getWeekStart(day)
{
  let weekStart = null
  switch(day.getDay())
  {
    case 0: //day is sunday
      weekStart = day
      break;
    case 1: //day is monday
      weekStart = new Date(day.getTime() - (1 * DAY_IN_MILLISECONDS))
      break;
    case 2: //day is tuesday
      weekStart = new Date(day.getTime() - (2 * DAY_IN_MILLISECONDS))
      break;
    case 3: //day is wednesday
      weekStart = new Date(day.getTime() - (3 * DAY_IN_MILLISECONDS))
      break;
    case 4: //day is thursday
      weekStart = new Date(day.getTime() - (4 * DAY_IN_MILLISECONDS))
      break;
    case 5: //day is friday
      weekStart = new Date(day.getTime() - (5 * DAY_IN_MILLISECONDS))
      break;
    case 6: //day is saturday
      weekStart = new Date(day.getTime() - (6 * DAY_IN_MILLISECONDS))
      break;
    default:
      weekStart = today;
      break;
  }
  return weekStart;
}

function getWeekEnd(weekStart){
  return new Date(weekStart.getTime() + (7 * DAY_IN_MILLISECONDS))
}

function getWeekBounds(dayInput)
{
 let start = getWeekStart(dayInput)
 let end = getWeekEnd(start);
 return [start, end];
}