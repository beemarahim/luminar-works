var state={ name:"kerala", confirmed_cases:12000, cured:5000 }
console.log(state["name"]);
console.log(state.confirmed_cases);
//death not exist in state enter death=100
if(!("death" in state)){
state["death"]=100
}
console.log(state);
state.confirmed_cases+=200;
console.log(state);