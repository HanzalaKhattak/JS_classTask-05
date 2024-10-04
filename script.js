function calculateAge(){
    const doB = document.getElementById('input').value;
    if(doB){
        const date = new Date(doB);
        const today = new Date();
        var year = today.getFullYear() - date.getFullYear();
        var month = today.getMonth() - date.getMonth();
        var day =  today.getDate() - date.getDate();
        

        if (month < 0 || (month === 0 && day < 0)) {
            year = year -1;
            month += 12;
        }
    
        if (day < 0) {
            month = month -1;
            var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            day += previousMonth; 
        }


        document.getElementById('year').innerHTML = year;
        document.getElementById('month').innerHTML = month;
        document.getElementById('day').innerHTML = day;
    }else{
        alert("Select a Valid Date of Birth!");
    }     
    

}
