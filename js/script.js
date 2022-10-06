/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
Function 'showPage will create the html elements needed to display the page with nine students
*/

//showPage function -  will have two parameters-
//  'list' for student date - 
//  'page' for page number 
//  - both passed as an arugument when the function is called
function showPage(list, page) {


	//Two variables which will display start and end index of student data 
	const startIndex = (page * 9) - 9;
	const endIndex = page * 9;

	const studentList = document.querySelector(".student-list");

	studentList.innerHTML = "";
	let html = "";

	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			html += `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
          `;
		}
	}
	studentList.insertAdjacentHTML("beforeend", html);
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
	// variable to store the value of the number of pagination buttons needed
	const numOfPages = Math.ceil(list.length / 9);

	const linkList = document.querySelector(".link-list");
	//the list is set to am empty string to remove data if present
	linkList.innerHTML = "";
	let buttonHTML = "";

	for (let i = 1; i <= numOfPages; i++) {
		buttonHTML += `
     <li>
       <button type="button">${i}</button>
     </li>    
     `;
	}
	linkList.insertAdjacentHTML("beforeend", buttonHTML);

	document.querySelector('button').className = 'active';

	linkList.addEventListener("click", (e) => {
		const buttonClicked = e.target;
		if (buttonClicked.tagName === "BUTTON") {
			const activeClassButton = document.getElementsByClassName("active");
			activeClassButton[0].className = "";
			buttonClicked.className = "active";
			showPage(list, buttonClicked.textContent);
		}
	});
}

// Call functions
showPage(data, 1);
addPagination(data);