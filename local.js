function allData(){
    table.innerHTML = ``
    contactLIst = JSON.parse(localStorage.getItem(listItem)) ??[]
    var listItem = [];
    contactLIst.forEach(function(value,i){
        var table = document.getElementById("table");

        table.innerHTML +=`
        <tr>
        <td>${i+1}</td>;
        <td>${value.name}</td>;
        <td>${value.stdclass}</td>;
        <td>${value.tnum}</td>;
        <td>${value.Age}</td>;
        <td>
            <button clas="btn btn-sm btn-success" onclick="find(${value.id})";
                <i class="fa fa trash"></i>;
            </button>;
        </td>;
        <td>;
        <button clas="btn btn-sm btn-danger" onclick="removeData(${value.id})";
            <i class="fa fa trash"></i>;
        </button>;
        </td>;
        </tr>;

        `
    });
}
function save() {
    contactLIst = JSON.parse(localStorage.getItem('listItem')) ??[]

    var id
    contactLIst.lenght != 0 ? contactLIst.findLast((item) => id = item.id) : id = 0;

    if(!document.getElementById('name').value || !document.getElementById('Age').value||
       !document.getElementById('stdclass').value || !document.getElementById('tnum').value||
       !document.getElementById('rollno').value){

           alert('please fill in all fields');
           return
       }

     if (document.getElementById('id').value) {
        contactLIst.forEach(value =>{
            if(document.getElementById('id').value == value.id){
                value.name = document.getElementById('name').value,
                value.rollno = document.getElementById('rollno').value,
                value.stdclass = document.getElementById('stdclass').value,
                value.tnum = document.getElementById('tnum').value,
                value.Age = document.getElementById('Age').value;
            }
        })
     } else{
        var Item = {
            id : id + 1,

            name :  document.getElementById('name').value,
            rollno : document.getElementById('rollno').value,
            stdclass : document.getElementById('stdclass').value,
            num : document.getElementById('tnum').value,
            Age : document.getElementById('Age').value
        }

        contactLIst.push(Item);
     }  
     localStorage.setItem('listItem',JSON.stringify(contactLIst));

     allData();

     document.getElementById('form').reset();

}
     
     function find(id){
        contactLIst = JSON.parse(localStorage.getItem('listItem'))  ?? []

        contactLIst.forEach(function (value) {
            if(value.id == id){
            document.getElementById('id').value = value.id;
            document.getElementById('name').value = value.name;
            document.getElementById('stdclass').value = value.stdclass;
            document.getElementById('rollno').value = value.rollno;
            document.getElementById('tnum').value = value.tnum;
            document.getElementById('Age').value = value.id;
            }
        })
     }
    


function removeData(id) {

    contactLIst = json.parse(localStorage.getItem('listItem')) ?? []

    if (confirm("are you sure you want to delete this record?")) {
        contactLIst = contactLIst.filter(function(value){
            return value.id !=id;
        });
        localstorage.setItem('listItem',JSON.stringify(contactLIst))

        allData()
    }
}

allData()

function clearData() {
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
    
}