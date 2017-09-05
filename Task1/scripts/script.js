function validateEmail(){
    var newEmail = document.getElementsByClassName('login')[0].value;
    var errors = [];
    
    var ruleForEmail = /^[a-zA-Zа-яА-Я0-9_\-.]{4,20}@[a-zA-Zа-яА-Я]{2,5}(.[a-zA-Zа-яА-Я]{2,5}){1,2}$/;


    if (!newEmail.match(ruleForEmail)){
        alert("Your login should contain digis, letters and '_', '.', '-' only before '@' and be at least 4 and less than 20 characters. Domain name can contain 2-5 characters. Email can contain 2 domain names");
       
    }
    if(newEmail.match(ruleForEmail)){
        validatePassword();
    }
};

function validatePassword(){
    var newPassword = document.getElementsByClassName('password')[0].value;
    var errors = [];
    var ruleForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])[a-zA-z0-9!@#$%]{8,21}$/;
    
    if (newPassword.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (newPassword.length > 20) {
        errors.push("Your password must be less than 20 characters"); 
    }  
    if (newPassword.search(/[a-zа-я]/i) < 0) {
        errors.push("Your password must contain at least one letter in lower case.");
    } //укр, не рос
    if (newPassword.search(/[A-ZА-Я]/i) < 0) {
        errors.push("Your password must contain at least one letter in upper case.");
    } 
    if (newPassword.search(/[!@#$%]/) < 0) {
        errors.push("Your password must contain at least one of [!@#$%] symbols."); 
    } 
    if (newPassword.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    } 
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    if(true){
        redirect();
    }
    return true;
}

function redirect() {
    window.location.href = "personal-cabinet.html";
}

var data = [
    {
        fileName: ("_www_app.zip"),
        fileSize: (132.45),
        fileDate: ("2014.02.28 18:24:54")
    },
    {
        fileName: ("файл з назвою кирилицею"),
        fileSize: (132.22),
        fileDate: ("2014.02.28 18:01:15")
    },
    {
        fileName: ("WW file for test sorting #1"),
        fileSize: (149.25),
        fileDate: ("2017.09.04 23:43:15")
    },
    {
        fileName: ("file for test sorting #2"),
        fileSize: (147.25),
        fileDate: ("2017.09.05 00:00:00")
    },
    ]

    window.onload = function(){
        renderTable(data);
        
        document.getElementsByClassName("size-button-sort-asc")[0].onclick = function() {
            renderTable(sortBySize(data, true));
        };

        document.getElementsByClassName("size-button-sort-desc")[0].onclick = function() {
            renderTable(sortBySize(data, false));
        };

        document.getElementsByClassName("file-button-sort-asc")[0].onclick = function() {
            renderTable(sortByName(data, true));
        }
        document.getElementsByClassName("file-button-sort-desc")[0].onclick = function() {
            renderTable(sortByName(data, false));
        }

        document.getElementsByClassName("date-button-sort-asc")[0].onclick = function() {
            renderTable(sortByDate(data, true));
        }
        document.getElementsByClassName("date-button-sort-desc")[0].onclick = function() {
            renderTable(sortByDate(data, false));
        }
    };

    function renderTable(dataSet) {

        document.getElementsByClassName("table-body")[0].innerHTML = " ";
            
        for (var i = 0; i < dataSet.length; i++) {
            var row = document.createElement("TR");
            row.classList.add("info-table-rows");

            var data1 = document.createElement("td");
            var linkFile = document.createElement("a");
            linkFile.innerHTML = dataSet[i].fileName;
            linkFile.setAttribute("href", "#");
            data1.appendChild(linkFile);

            var data2 = document.createElement("td");
            data2.innerHTML = dataSet[i].fileSize;

            var data3 = document.createElement("td");
            data3.innerHTML = dataSet[i].fileDate;

            var data4 = document.createElement("td");
            var deleteButton = document.createElement("a");
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute("href", "#");
            deleteButton.classList.add("delete-link");
            data4.appendChild(deleteButton);

            row.appendChild(data1);
            row.appendChild(data2);
            row.appendChild(data3);
            row.appendChild(data4);

            document.getElementsByClassName("table-body")[0].appendChild(row);
        }
    };

    function sortBySize(dataSet, asc){
        var sortedData = dataSet.slice();
        for (var i = 0; i < sortedData.length; i++) {
            for (var j = 0; j < sortedData.length - 1; j++){
                if (asc && sortedData[j].fileSize > sortedData[j+1].fileSize || !asc && sortedData[j].fileSize < sortedData[j+1].fileSize) {
                    var swap = sortedData[j+1];
                    sortedData[j+1] = sortedData[j];
                    sortedData[j] = swap; 
                } 
            }
        }
        return sortedData;
    };

    function sortByName(dataSet, asc){
        var sortedData = dataSet.slice();
        for (var i = 0; i < sortedData.length; i++) {
            for (var j = 0; j < sortedData.length - 1; j++){
                if (asc && sortedData[j].fileName.toLowerCase() > sortedData[j+1].fileName.toLowerCase() || !asc && sortedData[j].fileName.toLowerCase() < sortedData[j+1].fileName.toLowerCase()) {
                    var swap = sortedData[j+1];
                    sortedData[j+1] = sortedData[j];
                    sortedData[j] = swap;
                }
            }
        }
        return sortedData;
    };

    function sortByDate(dataSet, asc){
        var sortedData = dataSet.slice();
        for (var i = 0; i < sortedData.length; i++) {
            for (var j = 0; j < sortedData.length - 1; j++){
                var DateA = new Date(sortedData[j].fileDate);
                var DateB = new Date(sortedData[j+1].fileDate);
                if (asc && DateA - DateB > 0 || !asc && DateA - DateB < 0) {
                    var swap = sortedData[j+1];
                    sortedData[j+1] = sortedData[j];
                    sortedData[j] = swap;
                }
            }
        }
        return sortedData;
    };