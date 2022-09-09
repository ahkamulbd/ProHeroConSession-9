let marks = 97;

if (marks < 0 || marks > 100) {
    console.log('Invalid Marks')
}
else if (marks >= 33 && marks <= 39) {
    console.log('Grade: D')
}
else if (marks >= 40 && marks <= 49) {
    console.log('Grade: C')
}
else if (marks >= 50 && marks <= 59) {
    console.log('Grade: B')
}
else if (marks >= 60 && marks <= 69) {
    console.log('Grade: A-')
}
else if (marks >= 70 && marks <= 79) {
    console.log('Grade: A')
}
else if (marks >= 80 && marks <= 95) {
    console.log('Grade: A+')
}
else if (marks >= 96 && marks <= 100) {
    console.log('Grade: GoldenA+')
}
else {
    console.log('Grade: F')
}