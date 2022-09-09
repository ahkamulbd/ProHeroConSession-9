let marks = 67;

switch (marks) {
    case 'marks < 0 || marks > 100':
        console.log('Invalid Marks');
        break;
    case 'marks >= 33 && marks <= 39':
        console.log('Grade: D');
        break;
    case 'marks >= 40 && marks <= 49':
        console.log('Grade: C');
        break;
    case 'marks >= 50 && marks <= 59':
        console.log('Grade: B');
        break;
    case 'marks >= 60 && marks <= 69':
        console.log('Grade: A-');
        break;
    case 'marks >= 70 && marks <= 79':
        console.log('Grade: A');
        break;
    case 'marks >= 80 && marks <= 95':
        console.log('Grade: A+');
        break;
    case 'marks >= 95 && marks <= 100':
        console.log('Grade: GoldenA+');
        break;
    default:
        console.log('Grade: F');

}