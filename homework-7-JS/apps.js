function createTable(rows, columns) {
    let table = '<table border="1">';
  
    for (let i = 1; i <= rows; i++) {
      table += '<tr>';
      for (let j = 1; j <= columns; j++) {
        table += '<td>Row-' + i + ' Column-' + j + '</td>';
      }
      table += '</tr>';
    }
  
    table += '</table>';
  
    document.body.innerHTML += table;
  }
  

  let userRows = prompt("Enter the number of rows:");
  let userColumns = prompt("Enter the number of columns:");
  
  createTable(parseInt(userRows), parseInt(userColumns));