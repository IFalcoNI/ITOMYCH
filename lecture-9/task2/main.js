// cmd
// DAY=monday node main.js
import schedule from './schedule.js'
const day = process.env.DAY
const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = schedule
switch (day) {
    case 'monday':
        console.log(monday);
        break;
    case 'tuesday':
        console.log(tuesday);
        break;
    case 'wednesday':
        console.log(wednesday);
        break;
    case 'thursday':
        console.log(thursday);
        break;
    case 'friday':
        console.log(friday);
        break;
    case 'saturday':
        console.log(saturday);
        break;
    case 'sunday':
        console.log(sunday);
        break;
    default:
        console.log("Wrong day name");
        break;
}