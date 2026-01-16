let currentpage = 0;
$(document).ready(function () {
    $("#loading").hide();
    callapi(currentpage);

    $("#search").on('keyup', function() {
        let Searchdata = $("#search").val();
        callapi(0,Searchdata)
    });
});
const apiurl = `http://localhost:3000/api/all-users`;
async function callapi(pagenumber,Search) {
    $("#loading").show();
    const response = await fetch(apiurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            pagenumber: pagenumber != null ? pagenumber : currentpage ,
            Search : $("#search").val() != null ? $("#search").val() : ""
        })
    }).then(async response => {
        if (!response.ok) {
            console.log(`error`, error);
            return;
        } else {
            console.log(`response`, response);
            const data = await response.json();
            await printhtml(data.users);
            await pagginglogic(data.users, pagenumber);
            $("#loading").hide();
        }
    }).catch(error => {
        console.log(`error`, error);
    })
}
function dateToShort(myDate) {
    return myDate.substr(0, 10);
}
async function printhtml(users) {
    let html = ``;
    users.forEach(element => {
        html += `<tr>`;
        html += `<td>${element.id}</td>`;
        html += `<td>${element.guid}</td>`;
        html += `<td>${element.fname}</td>`;
        html += `<td>${element.lname}</td>`;
        html += `<td>${element.city}</td>`;
        html += `<td>${dateToShort(element.created_date)}</td>`;
        html += `</tr>`
    });
    $("#tbody").html(html)
}

async function pagginglogic(users, pagenumber) {
    let perpage = 10;
    let pagginghtml = ``;
    let totalpages = users[0].total_record;
    let nextpages = pagenumber + 5;
    pagginghtml += `<li class="page-item ${pagenumber < 1 ? "disabled" : "" } ">`;
    pagginghtml += `<a class="page-link" onclick="callapi(${pagenumber-1})"  href="javascript:void(0)" tabindex="-1">Previous</a>`;
    pagginghtml += `</li>`;
    for (let i = pagenumber-2; i <= nextpages; i++) {
        console.log("i value",i);
        
        if (totalpages / perpage >= i && i > 0) {
            pagginghtml += `<li class="page-item ${pagenumber == i ? "active" : ""}"><a class="page-link" href="javascript:void(0)" onclick="callapi(${i})">${i}</a></li>`;
        }
    }
    console.log(pagenumber,totalpages);
    console.log(pagenumber);
    const stoppage = totalpages/perpage
    pagginghtml += `<li class="page-item ${pagenumber >= stoppage ? "disabled" : "" } ">`;
    pagginghtml += `<a class="page-link" onclick="callapi(${pagenumber+1})"  href="javascript:void(0)" >Next</a>`;

    pagginghtml += `</li>`;
    $("#pagination").html(pagginghtml)
}