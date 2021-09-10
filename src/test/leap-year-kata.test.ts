import {isLeapYear} from "../main/leap-year-kata"

describe("Leap Year Tests",()=>{
    it.each([1988, 1992, 1996])("should return true if %d is a typical leap year",(validLeapYear)=>{
        const result = isLeapYear(validLeapYear);
        expect(result).toBe(true);
    })

    it.each([1200, 1600, 2000])("should return true when $d is an atypical leap year",(year)=>{
        const result = isLeapYear(year)
        expect(result).toBe(true)
    })

    it.each([1900, 1700, 1800])("should return false if $d is an atypical common year",(year)=>{
        const result = isLeapYear(year)
        expect(result).toBe(false)
    })

    it.each([2001, 2002, 2003])("should return false if $d is a typical common year",(year)=>{
        const result = isLeapYear(year)
        expect(result).toBe(false)
    })
})
