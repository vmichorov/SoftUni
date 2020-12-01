function leapYear(first, last) {
    first = Number(first);
    last = Number(last);

    for (let i = first; i <= last; i = i + 4) {
        console.log(i);
    }
}

leapYear("2020",
"2032");