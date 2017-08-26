//list of students
const studentList = document.querySelectorAll('.student-item');
// for loop to display '' or display none
const forLoop = (array, displayTo) => {
  for(let i = 0; i < array.length; i++){
    array[i].style.display = displayTo;
  }
};
// function that can manipulate how many students to show per page
const showPage = (pageNumber, studentList, perPage) => {
  // will remove all students from page
  forLoop(studentList, 'none');
  const max = pageNumber * perPage;
  const min = max - perPage
  for(let i = min; i < max; i++){
    studentList[i].style.display = '';
  }
};
/*
Function will create <li> and <a> tags depending on how many items on list.
clickLink function will respond to a click event and show page depending
on number.
*/
const appendPageLinks = (studentList, perPage) => {
  const totalPages = Math.ceil(studentList.length/perPage);
  var html = ''
  for(let i = 0; i < totalPages; i++){
    html += '<li><a>' + (i + 1) + '</a></li>';
  }
  document.querySelector('.secondL').innerHTML = html;
  const clickLink = document.querySelector('.secondL').addEventListener('click', (e) => {
    const aTag = e.target.innerHTML;
    if(isNaN(aTag) === false){
      showPage(aTag, studentList, perPage)
    }

  })
};

/*
function will work as simple search. if value of search matches name
of student, it will show it. Doesnt have to be an exact match, any partial match
will show in the results. Function will also remove <a> tags
 */
const searchStudents = () => {
  const searchValue = document.querySelector('input[name=search]');
  const studentsNames = document.querySelectorAll('h3');
  const liLinks = document.querySelectorAll('.secondL li');
  const button = document.querySelector('button[type=submit]').addEventListener('click', () => {
    forLoop(studentList, 'none');
    forLoop(liLinks, 'none');
    for(let i = 0; i < studentsNames.length; i++){
      if(studentsNames[i].innerHTML.includes(searchValue.value.toLowerCase()) === true){
        studentList[i].style.display = '';
      }
    }
  })
};

showPage(1, studentList, 10);
appendPageLinks(studentList, 10);
searchStudents();
