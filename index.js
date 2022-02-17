class tableWithHeaders extends HTMLTableElement {
    constructor() {
        super();
        const src = this.getAttribute("src")
        import(src)
        .then((module) => module.table)
        .then((table) => {
            for (let i = 0; i < table.length; i++) {
                const tableRow = document.createElement("tr")
                for (let j = 0; j < table[i].length; j++) {
                    let tableCell;
                    if (i == 0 || j == 0) {
                        tableCell = document.createElement('th')
                    } else {
                        tableCell = document.createElement("td")
                    }
                    tableCell.textContent = table[i][j];
                    tableRow.appendChild(tableCell)
                }
                this.append(tableRow);
            }
        })
    }
}

customElements.define('table-with-headers', tableWithHeaders, {extends: "table"})