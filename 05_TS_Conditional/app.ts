//  if-else , switch

let currentTime: number = 22;
let wishMessage: string = '';

if (currentTime >= 0 && currentTime <= 12) {
    wishMessage = "Good Morning";
} else if (currentTime >= 12 && currentTime <= 17) {
    wishMessage = "Good Afternoon";
} else if (currentTime >= 18 && currentTime <= 21) {
    wishMessage = "Good Evening";
} else {
    wishMessage = "GoodNite";
}

console.log(wishMessage);

let day: number = new Date().getDay();
let today: string = '';

switch (day) {
    case 0:
        today = 'SUNDAY';
        break;
    case 1:
        today = 'MONDAY';
        break;
    case 2:
        today = 'TUESDAY';
        break;
    case 3:
        today = 'WEDNSDAY';
        break;
    case 4:
        today = 'THURSDAY';
        break;
    case 5:
        today = 'FRIDAY';
        break;
    case 6:
        today = 'SATURDAY';
        break;
}

console.log(today);