// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  // let ele = document.getElementById("code");
  // let tempData = data.filter((a) => a.id < 50);
  // ele.innerHTML = JSON.stringify(tempData, null, 4);

  // 2. Destructuring

  let {limit, skip, total, users} = data;
  // console.log(users);

  // 3. Template Literals
  // let names = users.map((ele) => {
  //   return { firstName: ele.firstName, lastName: ele.lastName}
  // });
  // console.log(names);

  // // 4. reduce
  // let age = users.reduce((a,b) =>{
  //   a+=b.age;
  //   return a;
  // }, 0);              //takes initial value (0 for now)
  // console.log(age);

  // object array w firstName and lastName as Name and filter the person age-wise >50 and return the aggregate weight

  let usersFiltered = users.filter(user => user.age < 50);
  console.log(usersFiltered.length);
  let objArr = usersFiltered.map((ele)=> {
    return { Name : ele.firstName + " " + ele.lastName}
  });
  console.log(objArr);
  let aggWeight = usersFiltered.reduce((a,b) => {
    a += b.weight;
    return a;
  }, 0);
  console.log(aggWeight / usersFiltered.length);

  // let res = 
  //   users
  //     .map((ele) => {
  //       return { Name :  , age: ${ele.age}}
  //     })
}

fetchDataFromServer();
