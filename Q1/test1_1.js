Date.prototype.daysTo=function(date2){
    const unixDate1 = Math.floor(this.getTime() / 1000);
    const unixDate2 = Math.floor(date2.getTime() / 1000);
    const unixTimeDiff=unixDate2-unixDate1
    if(unixTimeDiff>0){
        console.log("Date 2 > Date 1")
    }else if(unixTimeDiff<0){
        console.log("Date 1 > Date 2")
    }else if(unixTimeDiff==0){
        console.log("Date 1 = Date 2")
    }else{
        console.log("Wrong time duration")
    }
    const days = Math.floor(unixTimeDiff / (60 * 60 * 24));
    // const hours = Math.floor((unixTimeDiff % (60 * 60 * 24)) / (60 * 60)); 
     console.log(`days: ${days}`);
    return days
}

function dateDifference(){
    // const date1 = new Date('2024-12-01');
    // const date2 = new Date('2024-12-05');
    const date1 = new Date('2024-12-01T12:30:00');
    const date2 = new Date('2024-12-10T15:30:00');
    const completeDate= date1.daysTo(date2)
    return completeDate
}
const result=dateDifference()
console.log(result)
