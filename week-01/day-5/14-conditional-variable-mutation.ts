let l: number = 24;
let out: number = 0;

// if l is even increment out by one
if(l % 2 == 0){
    out = out + 1
    console.log(out)
}

let n: number = 13;
let out2: string = '';

// if n is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

if(20 > n || n > 10){
    out2 = "Sweet"
}else if(n < 10){
    out2 = "Less"
}else if(n > 20){
    out2 = "More"
}
console.log(out2) 

let m: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement m by 2
// if credits are smaller than 50,
// and is_bonus is false decrement m by 1
// if is_bonus is true m should remain the same

if(credits >= 50 && isBonus === false){
    m = m - 2
}
else if(credits < 50 && isBonus === false){
    m = m - 1
}
else if(isBonus){
    m = m - 0
}

console.log(m);

let q: number =  8;
let time: number = 120;
let out3: string = '';

// if q is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if(q % 4 == 0 && time <= 200){
    out3 = "Check"
}
else if(time > 200){
    out3 = "Time out"
} 
else{
    out3 = "Run Forest Run!"
}

console.log(out3);