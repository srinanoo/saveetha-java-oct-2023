// // var a = 10;
// // console.log(a);
// // console.log(typeof a);

// // a = "Dinesh";
// // console.log(a);
// // console.log(typeof a);

// // var a = true;
// // console.log(a);
// // console.log(typeof a);

// // let b = 10;
// // console.log(b);
// // console.log(typeof b);

// // b = "Dinesh";
// // console.log(b);
// // console.log(typeof b);

// // let b = true;
// // console.log(b);
// // console.log(typeof b);

// // for(var i = 0; i < 10; i++) {
// //     console.log(i);
// // }
// // console.log(i);

// // for(let j = 0; j < 10; j++) {
// //     console.log(j);
// // }
// // console.log(j);

// // const c = 1000;
// // console.log(c);

// // c = true;


// // var a = 10; // global
// // console.log(a, " - Firt line of a");

// // function testFunction() {
// //     console.log(a, " - Second line of a");

// //     b = 20; // local
// //     console.log(b, " - First line of b");
// // }
// // testFunction();

// // console.log(a, " - Third line of a");

// // var b;
// // console.log(b, " - Second line of b");

// // var a = 10; // number
// // var b = 10.444; // number
// // var c = "Dinesh"; // string
// // var c1 = "d"; // string
// // var d = false; // boolean

// // var e = [1, "Dinesh", true]; // array
// // var f = { // object
// //     name: "Dinesh",
// //     active: true,
// //     id: 1,
// // }

// let users = [
//     {
//         id: 1,
//         username: "Dinesh",
//         department: "ECE",
//         active: true
//     },
//     {
//         id: 2,
//         username: "Student 1",
//         department: "IT",
//         active: false
//     },
//     {
//         id: 3,
//         username: "Student 2",
//         department: "EEE",
//         active: true
//     }
// ];
// console.log(users);

// // console.log(
// //     users[0].id, 
// //     users[0].name, 
// //     users[0].department, 
// //     users[0].active
// // );
// // console.log(users[1]);
// // console.log(users[2]);
// // console.log(users[3]);

// for(let i = 0; i < users.length; i++) {
//     console.log("User Details: " + i + " ....");
//     // console.log(users[i]["id"], users[i]["name"], users[i]["active"], users[i]["department"])

//     let result = "";
//     for(let temp in users[i]) {
//         result += users[i][temp] + " || ";
//     }
//     console.log(result);
// }

// // let obj = {
// //     "id": 1,
// //     "username": "Dinesh",
// //     "active": true
// // }
// // for(let i in obj) {
// //     console.log(i, obj[i]);
// // }

// // let arr = ["a", "b", "c", "d", "e", "f"];
// // for(let i in arr) {
// //     console.log(i, arr[i]);
// // }

// // let i = 0;
// // while(i < 10) { // 0<10 1>10 2<10 3<10 4<10.. 9<10 10<10
// //     console.log(++i); // 12345678910
// // }

// // User1 - ID || NAME || ACTIVE || DEPARTMENT ||
// // User2 - ID, NAME, ACTIVE, DEPARTMENT
// // User3 - ID, NAME, ACTIVE, DEPARTMENT


function processData() {
    // old way...
        console.log(document.forms.length);

        let username = document.forms[3].txtUsername.value;
        let password = document.forms[3].txtPassword.value;
        console.log(username, password);

        let username1 = document.loginForm.txtUsername.value;
        let password1 = document.loginForm.txtPassword.value;
        console.log(username1, password1);
    
    // traditional way...
        let username2 = document.getElementById("txtUsername").value;
        let password2 = document.getElementById("txtPassword").value;
        console.log(username2, password2);

        let username3 = document.getElementsByClassName("clsInput")[0].value
        let password3 = document.getElementsByClassName("clsInput")[1].value;
        console.log(username3, password3);

    // modern way...
        let username4 = document.querySelector("#txtUsername").value;
        let password4 = document.querySelector("#txtPassword").value;
        console.log(username4, password4);

        let username5 = document.querySelectorAll(".clsInput")[0].value;
        let password5 = document.querySelectorAll(".clsInput")[1].value;
        console.log(username5, password5);
}