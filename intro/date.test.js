const checkDate = require('./date');
    
test('Check date format: dd-mm-yyyy', () => {
    expect(checkDate('12-01-2022', 'dd-mm-yyyy')).toBe(true);
    expect(checkDate('32-01-2022', 'dd-mm-yyyy')).toBe(false);
    expect(checkDate('31-13-2024', 'dd-mm-yyyy')).toBe(false);
    expect(checkDate('131-13-2024', 'dd-mm-yyyy')).toBe(false);
    expect(checkDate('31-131-2024', 'dd-mm-yyyy')).toBe(false);
    expect(checkDate('31-13-20242', 'dd-mm-yyyy')).toBe(false);
    expect(checkDate('12-31-2023', 'mm-dd-yyyy')).toBe(true);
    expect(checkDate('13-31-2023', 'mm-dd-yyyy')).toBe(false);
    expect(checkDate('12-32-2023', 'mm-dd-yyyy')).toBe(false);
    expect(checkDate('121-32-2023', 'mm-dd-yyyy')).toBe(false);
    expect(checkDate('12-321-2023', 'mm-dd-yyyy')).toBe(false);
    expect(checkDate('12-32-20235', 'mm-dd-yyyy')).toBe(false);
    expect(checkDate('12-31-2023', 'yyyy-mm-dd')).toBe(false);
    expect(checkDate('2023-31-2023', 'yyyy-mm-dd')).toBe(false);
    expect(checkDate('2023-31-12', 'yyyy-mm-dd')).toBe(false);
    expect(checkDate('Jan 24, 2024', 'Mon,day, year')).toBe(true);
    expect(checkDate('February 31, 2023', 'Mon,day, year')).toBe(false);
    expect(checkDate('May 321, 2023', 'Mon,day, year')).toBe(false);
    expect(checkDate('Jun 32, 20235', 'Mon,day, year')).toBe(false);

});