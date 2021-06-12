class TableLoader {
    static loadFrom(manager, tableElement) {
        manager.employees.forEach( (employee, key) => {
            let line = tableElement.insertRow(key + 1);
            let i = 0;
            for(let [key, value] of  Object.entries(employee)) {
                console.log(key);
                if (typeof value === 'string') {
                    let cell = line.insertCell(i);
                    let text = document.createTextNode(value);
                    cell.appendChild(text);
                    i++;
                }

                if (key === 'skills') {
                    let cell = line.insertCell(i);
                    let text = document.createTextNode(value.join(','));
                    cell.appendChild(text);
                    i++;
                }
            }
        });
    }
}

export default TableLoader;