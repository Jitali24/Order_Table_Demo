var table = document.getElementById('table')
var Sr = document.getElementById('sr')
var OrderID = document.getElementById('orderid')
var CustomerName = document.getElementById('cname')
var Quantity = document.getElementById('quantity')
var CustomerEmail = document.getElementById('e-mail')
var OrderDate = document.getElementById('orderdate')
var selectedrow = null

// console.log(table.rows.length)

function addRecord() {
    if (validate() == true) {
        let newRow = table.insertRow(table.rows.length - 3)
        let cell1 = newRow.insertCell(0)
        let cell2 = newRow.insertCell(1)
        let cell3 = newRow.insertCell(2)
        let cell4 = newRow.insertCell(3)
        let cell5 = newRow.insertCell(4)
        let cell6 = newRow.insertCell(5)
        let cell7 = newRow.insertCell(6)

        cell1.innerHTML = count()
        cell2.innerHTML = OrderID.value
        cell3.innerHTML = CustomerName.value
        cell4.innerHTML = CustomerEmail.value
        cell5.innerHTML = Quantity.value
        cell6.innerHTML = OrderDate.value
        cell7.innerHTML =
            '<button  class="cr-btn1" onclick="edit(this);">Update</button> <button class="cr-btn1" onclick="remove(this);">Remove</button>'
        clear()
        records()
    }
}

function count() {
    let i = table.rows.length - 5
    return i
}

function clear() {
    Sr.value = ''
    OrderID.value = ''
    CustomerName.value = ''
    Quantity.value = ''
    CustomerEmail.value = ''
    OrderDate.value = ''
}

function cancel() {
    document.getElementById('orderid').value = ''
    document.getElementById('cname').value = ''
    document.getElementById('e-mail').value = ''
    document.getElementById('quantity').value = ''
    document.getElementById('orderdate').value = ''
}

function remove(r) {
    let i = r.parentNode.parentNode.rowIndex
    document.getElementById('table').deleteRow(i)
    records()
}

function records() {
    let x = document.getElementById('table').rows.length - 5
    document.getElementById('last').innerHTML = 'Total records: ' + x
}

function edit(r) {
    selectedrow = r.parentElement.parentElement
    document.getElementById('sr').value = selectedrow.cells[0].innerHTML
    document.getElementById('orderid').value = selectedrow.cells[1].innerHTML
    document.getElementById('cname').value = selectedrow.cells[2].innerHTML
    document.getElementById('e-mail').value = selectedrow.cells[3].innerHTML
    document.getElementById('quantity').value = selectedrow.cells[4].innerHTML
    document.getElementById('orderdate').value = selectedrow.cells[5].innerHTML
}

function update() {
    selectedrow.cells[0].innerHTML = document.getElementById('sr').value
    selectedrow.cells[1].innerHTML = document.getElementById('orderid').value
    selectedrow.cells[2].innerHTML = document.getElementById('cname').value
    selectedrow.cells[3].innerHTML = document.getElementById('e-mail').value
    selectedrow.cells[4].innerHTML = document.getElementById('quantity').value
    selectedrow.cells[5].innerHTML = document.getElementById('orderdate').value
    clear()
    selectedrow = null
    count()
}

function save() {
    if (selectedrow == null) {
        addRecord()
    } else {
        if (validate() == true) {
            update()
        }
    }
}

function search(a) {
    let field1 = document.getElementById('s_sr').value.toUpperCase()
    let field2 = document.getElementById('s_orderid').value.toUpperCase()
    let field3 = document.getElementById('s_cname').value.toUpperCase()
    let field4 = document.getElementById('s_e-mail').value.toUpperCase()
    let field5 = document.getElementById('s_quantity').value.toUpperCase()
    let field6 = document.getElementById('s_orderdate').value.toUpperCase()

    let table = document.getElementById('table')

    let tr = table.rows

    for (var i = 2; i < tr.length - 3; i++) {
        let td = tr[i].getElementsByTagName('td')[a]
        if (td && a == 0) {
            let value = td.textContent || td.innerHTML
            if (value.toUpperCase().indexOf(field1) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
                alert("Record doesn't exist.")
            }
        }
        if (td && a == 1) {
            let value = td.textContent || td.innerHTML
            if (value.toUpperCase().indexOf(field2) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
                alert("Record doesn't exist.")
            }
        }
        if (td && a == 2) {
            let value = td.textContent || td.innerHTML
            if (value.toUpperCase().indexOf(field3) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
                alert("Record doesn't exist.")
            }
        }
        if (td && a == 3) {
            let value = td.textContent || td.innerHTML
            if (value.toUpperCase().indexOf(field4) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
                alert("Record doesn't exist.")
            }
        }
        if (td && a == 4) {
            let value = td.textContent || td.innerHTML

            if (value.toUpperCase().indexOf(field5) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
                alert("Record doesn't exist.")
            }
        }
        if (td && a == 5) {
            let value = td.textContent || td.innerHTML
            if (value.toUpperCase().indexOf(field6) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
                alert("Record doesn't exist.")
            }
        }
    }
}

function validate() {
    let orderid2 = document.getElementById('orderid').value
    let cname2 = document.getElementById('cname').value
    let email2 = document.getElementById('e-mail').value
    let quantity2 = document.getElementById('quantity').value
    let orderdate2 = document.getElementById('orderdate').value

    if (orderid2 == '' || orderid2 == null || orderid2 == undefined) {
        alert('Please enter appropriate Order Id.')
        return false
    } else if (cname2 == '' || cname2 == null || cname2 == undefined) {
        alert('Please enter appropriate Customer Name.')
        return false
    } else if (email2 == '' || email2 == null || email2 == undefined) {
        alert('Please enter appropriate Customer Email.')
        return false
    } else if (quantity2 == '' || quantity2 == null || quantity2 == undefined) {
        alert('Please enter appropriate Quantity.')
        return false
    } else if (
        orderdate2 == '' ||
        orderdate2 == null ||
        orderdate2 == undefined
    ) {
        alert('Please enter appropriate Order Date.')
        return false
    } else {
        return true
    }
}
