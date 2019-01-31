/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Global Variables
***/

const students = document.querySelectorAll(".student-item");
const PAGE_LENGTH = 10;


/*** 
   showPage, changes list to only display given students
***/

const showPage = (page) => {
    //get page bounds
  let firstStudent = (page*PAGE_LENGTH)-PAGE_LENGTH;
  let lastStudent = (page*PAGE_LENGTH)-1;
    //only display students within page bounds
  for(let i = 0; i < students.length; i++){
    if(i >= firstStudent && i <= lastStudent){
      students[i].style.display = "block";
    } else {
      students[i].style.display = "none";
    }
  }
}

/*** 
   appendPageLinks, dynamically creates page links based on size of student record.
***/
const appendPageLinks = () => {
  let pages = (students.length/PAGE_LENGTH);
  const page = document.querySelector(".page");
  const div = document.createElement("div");
  const ul = document.createElement("ul");
    //building blocks for page links
  div.className = "pagination";
  page.appendChild(div);
  div.style.display = "block";
  div.appendChild(ul);

    //assemble them dynamically
  for(let i = 1; i < pages+1; i++){
    console.log("hello");
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li);
    a.textContent = i;
    a.href = "#";
    li.appendChild(a);
      //add event listener
    a.addEventListener("click", (e) => {
      const links = document.getElementsByTagName("a");
        //make all links inactive
      for(let i = 0; i < links.length; i++){
        links[i].className = "";
      }
        //reactivate target link
      e.target.className = "active";

      showPage(e.target.textContent);
    });
  }
}
  //tell program to do it all
appendPageLinks();
showPage(1);