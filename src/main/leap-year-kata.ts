export function isLeapYear(year:number):boolean{

    if(isAtypicalLeapYear(year)){
        return true;
    }

    if(isAtypicalCommonYear(year)){
        return false;
    }

    if(isTypicalLeapYear(year)){
        return true;
    }
    return false;
}

function isAtypicalLeapYear(year:number):boolean{

        return year % 400 == 0;
    }

function isAtypicalCommonYear(year:number):boolean{

    return year % 100 == 0;
}
function isTypicalLeapYear(year:number):boolean{

        return year % 4 ==0;
}