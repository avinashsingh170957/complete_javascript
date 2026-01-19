const btn = document.getElementById('dropdownBtn');
const menu = document.getElementById('dropdownMenu');

// btn.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
// });
const dropdowns = [];
$(document).ready(async function () {
    await fetch('http://localhost:3000/get-models').then(async (data) => {
        const datas = await data.json();
        console.log("data", datas);
        var firstselect = $("#dropdownMenu")
        firstselect.append($(`<option>Please Select Compnay name</option>`).val(''))
        datas.models.forEach(element => {
            firstselect.append($(`<option>${element.catname}</option>`).val(element.id))
        });
    }).catch((error) => {
        console.log(`error`, error);
    })

    $("#dropdownMenu").change(async function () {
        $("#dropdownMenu2").empty('');
        $("#dropdownMenu3").empty('');
        var secondselect = $("#dropdownMenu2")

        var selectedvalue = $("#dropdownMenu").val();
        console.log("selectedvalue", selectedvalue);
        await fetch('http://localhost:3000/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ compid: selectedvalue })
        }).then(async (response) => {
            const datas = await response.json();
            console.log(datas);
            secondselect.append($(`<option>Please Select Categories</option>`).val(''))
            datas.categories.forEach(element => {
                secondselect.append($(`<option>${element.catname}</option>`).val(element.id))
            });

        }).catch((error) => {
            console.log(`Error`, error);
        })
    })
    $("#dropdownMenu2").change(async function () {
        $("#dropdownMenu3").empty('');
        var compid = $("#dropdownMenu").val();
        var catid = $("#dropdownMenu2").val();
        await fetch('http://localhost:3000/get-categories-models', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ compid: compid, catid: catid })
        }).then(async (response) => {
            const responses = await response.json();
             var thirdselect = $("#dropdownMenu3");
             thirdselect.append($(`<option>Please Select models</option>`).val(''))
             responses.CategoryModels.forEach(element => {
                thirdselect.append($(`<option>${element.modelname}</option>`).val(element.id))
             });
            console.log(responses);            
        }).catch((error) => {
            console.log(`error`, error);
        })
    });


});