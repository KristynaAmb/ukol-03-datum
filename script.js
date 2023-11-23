/*Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }*/

const parseDate = (datum) => {
    //const den = datum.slice(0, 1);//const mesic = datum.slice(3,4);
    return 'day:' + datum.slice(0,2) + ', month:' + datum.slice(3,5) + ', year: ' + datum.slice(6,10) }
    document.body.innerHTML += `<p>${parseDate('12.10.2023')}</p>`