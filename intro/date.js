function checkDate(input, format) {
    const formats = {
        'dd-mm-yyyy': /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
        'mm-dd-yyyy': /^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-\d{4}$/,
        'yyyy-mm-dd': /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
        'Mon,day, year': /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{1,2},\s\d{4}$/
    };

    if (formats.hasOwnProperty(format)) {
        return formats[format].test(input);
    } else {
        throw new Error('Invalid date format');
    }
}

module.exports = checkDate;