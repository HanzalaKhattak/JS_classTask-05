function calculateAge(){
    const doB = document.getElementById('input').value;
    if(!doB){
        alert("Select a Valid Date of Birth!");
    }else{
        const date = new Date(doB);
        const today = new Date();
        document.getElementById("year").innerHTML = today.getFullYear() - date.getFullYear();
        document.getElementById("month").innerHTML = today.getMonth() - date.getMonth();
    }     
}
