class Average {


    performance(...args) {
        let sum = args[0] + args[1] + args[2] + args[3] + args[4];
        let avg = sum / 5;
        console.log(`Marks:${args}`);
        console.log(`Average Marks:${avg}`);

        if (avg <= 100 && avg > 90) {
            console.log(`Grade: A+`);
        }
        else if (avg <= 90 && avg > 80) {
            console.log(`Grade: A`);
        }
        else if (avg <= 80 && avg > 70) {
            console.log(`Grade:B+`);
        }
        else if (avg <= 70 && avg > 60) {
            console.log(`Grade:B`);
        }
        else if (avg <= 60 && avg > 50) {
            console.log(`Grade: C`);
        }
        else {
            console.log(`Failed`);
        }
    }

}

var average = new Average()
average.performance(82, 89, 92, 90, 90)


