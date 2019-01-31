/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const students = document.querySelectorAll(".student-item");
const PAGE_LENGTH = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
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
      for(let i = 0; i < links.length; i++){
        links[i].className = "";
      }
      e.target.className = "active";

      showPage(e.target.textContent);
    });
  }
}

appendPageLinks();
showPage(1);


// Remember to delete the comments that came with this file, and replace them with your own code comments.