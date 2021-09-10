import {isLeapYear} from "../main/leap-year-kata"

describe("Leap Year Tests",()=>{
    it.each([1988, 1992, 1996])("should return true if %d is a typical leap year",(validLeapYear)=>{
        const result = isLeapYear(validLeapYear);
        expect(result).toBe(true);
    })

    it.each([1200, 1600, 2000])("should return false when $d is an atypical leap year",(year)=>{
        const result = isLeapYear(year)

        expect(result).toBe(true)
    })


    // it.each([1700])("should return false when $d is an atypical common year",(year)=>{
    //     const result = isLeapYear(year)
    //
    //     expect(result).toBe(false)
    // })
})
