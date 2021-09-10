import {isLeapYear} from "../main/leap-year-kata"

describe("Leap Year Tests",()=>{
    it("should return true if input is a leap year",()=>{

        const validLeapYear = 1996;
        const result = isLeapYear(validLeapYear);
        expect(result).toBe(true);

    })

    it("should return false if input is not leap year",()=>{

    })
})
