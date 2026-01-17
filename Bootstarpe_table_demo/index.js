$(document).ready(async function () {
    try {
        const response = await fetch('http://localhost:3000/load-json');

        const result = await response.json();
        console.log('result', result);

        const sampledata = result.userdata;
        let htmltable = ``;
        sampledata.forEach(element => {
            htmltable += htmltable = `<tr><td><input type="checkbox" name=""></td><td>${element.id}</td>`;
            htmltable += htmltable = `<td>${element.guid}</td>`;
            htmltable += htmltable = `<td>${element.fname}</td>`;
            htmltable += htmltable = `<td>${element.lname}</td>`;
            htmltable += htmltable = `<td>${element.city}</td>`;
            htmltable += htmltable = `<td>${element.created_date}</td></tr>`;
        });
        $("#tbody").html(htmltable);
    } catch (err) {
        console.log('error', err);
    }


      $('#example').DataTable(
        
         {     

      "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
        "iDisplayLength": 5
       } 
        );
});


function checkAll(bx) {
  var cbs = document.getElementsByTagName('input');
  for(var i=0; i < cbs.length; i++) {
    if(cbs[i].type == 'checkbox') {
      cbs[i].checked = bx.checked;
    }
  }
}