// 1. api call
// 2. card layout
// 3. configurable fields

async function fetchDataFromServer(){
    //console.log("hi");
    try{
        let data = await fetch("https://dummyjson.com/users");
    let res = await data.json();
    let cards = document.getElementsByClassName("main-container")[0];
    //console.log(res);
    res.users.forEach((ele) => {
        //console.log(ele);
        //console.log("hi");
        cards.appendChild(createCard(ele));
        //console.log("hi");
    });
    } catch(ex) {
        console.log(ex);
    }
    // fetch("https://dummyjson.com/users")
    //     .then((response) => response.json())
    //     .then((json) => json.users)
    //     .forEach((ele) => {
    //         cards.appendChild(createCard(ele));
    //     });

}

const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const cityFormatter = (user) => `${user.address.city}`;
//const hairColorFormatter = (user) => `${user.hair.color}`;
const companyNameFormatter = (user) => `${user.company.name}`;

let config = [
    { value: "name", label: "Name", formatter: nameFormatter},
    { value: "age", label: "Age"},
    //{ value: "hairColor", label: "Hair Color", formatter: hairColorFormatter},
    { value: "city", label: "City", formatter: cityFormatter},
    { value: "companyName", label: "Company Name", formatter: companyNameFormatter},
    { value: "email", label: "Email"},
    { value: "birthDate", label: "Date of Birth"},
    { value: "bloodGroup", label: "Blood Group"},
    { value: "weight", label: "Weight"}, 
];

function createCard(user){
    console.log("hi");  
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let userImage = document.createElement("img");
    userImage.setAttribute("src", user.image);
    card.appendChild(userImage);
    let userDetails = document.createElement("div");
    userDetails.setAttribute("class", "user-details");
    config.forEach((ele) => {
        let {value, formatter, label} = ele;
        if(formatter){
            value = formatter(user);
        }else{
            value = user[value];
        }
        userDetails.appendChild(generateDetails(value, label));
    });
    card.appendChild(userDetails);
    return card;
}

function generateDetails(value, label){
    let details = document.createElement("div");
    details.setAttribute("class", "details");
    let detailLabel = document.createElement("h4");
    detailLabel.setAttribute("class", "details-label");
    detailLabel.textContent = label;
    details.appendChild(detailLabel);
    let detailvalue = document.createElement("span");
    detailvalue.textContent = value;
    details.appendChild(detailvalue);
    return details;
}

fetchDataFromServer();