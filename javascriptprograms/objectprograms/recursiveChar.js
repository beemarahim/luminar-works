// var pattern = "ABABC"

// var dict = {}

// for (let char of pattern) {
//     if (!(char in dict)) {
//         dict[char] = 1;
//     }
//     else {
//         console.log(`first recursive char is ${char}`);
//         break;
//     }
// }



var temperature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 30 },
    { district: "pkd", temprature: 31 },

]
// var srtd_temp=temperature.sort((dist1,dist2)=>dist2.temprature-dist1.temprature)
// console.log(srtd_temp);
tvm: 27,kollam:27,kottayam;28,ekm:29,tsr:30,pkd:31
var weather = {}
// let temprature;
for (let data of temperature) {
    let district = data["district"];
    let temp = data["temprature"];
    
    if (district in weather) {
let old_temp=weather[district]
        if (old_temp <temp){
        weather[district] = temp;}
       
    }
    else {
                    
        weather[district] =temp;
        
    }
   
} console.log(weather); 




function sortByTemp(data){
return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist[1])
}
console.log(sortByTemp(weather));
