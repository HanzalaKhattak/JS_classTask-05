function calculateAge(){
    const doB = document.getElementById('input').value;
    if(doB){
        const date = new Date(doB);
        const today = new Date();
        var year = today.getFullYear() - date.getFullYear();
        var month = today.getMonth() - date.getMonth();
        var day =  today.getDate() - date.getDate();

        document.getElementById('year').innerHTML = year;
        document.getElementById('month').innerHTML = month;
        document.getElementById('day').innerHTML = day;
    }else{
        alert("Select a Valid Date of Birth!");
    }     
    

}
