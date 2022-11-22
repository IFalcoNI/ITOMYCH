// cmd
// DAY=monday node main.js
// const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = schedule
// import schedule from './schedule.js'

const day = process.env.DAY
switch (day) {
    case 'monday':
        import('./days/monday.js');
        break;
    case 'tuesday':
        import('./days/tuesday.js');
        break;
    case 'wednesday':
        import('./days/wednesday.js');
        break;
    case 'thursday':
        import('./days/thursday.js');
        break;
    case 'friday':
        import('./days/friday.js');
        break;
    case 'saturday':
        import('./days/saturday.js');
        break;
    case 'sunday':
        import('./days/sunday.js');
        break;
    default:
        import("Wrong day name");
        break;
}