/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num) {
if (num <= 5) {
return false
} else {
  return true
}
}
function isNewTopScore(scr, topScr) {
  if (scr > topScr ) {
    return true
    
  } else {
    return false
    }
  }
  
  function isInDanger(grade) {
  if (grade >= 60 && grade <= 71) {
    return true
  } else {
    return false
  }

  }
  
  function isCoasting(grade) {
    if (grade >= 72 && grade <= 83) {
      return true
    } else {
      return false
    }
  }

  function isSucceeding(grade) {
    if (grade >= 84 && grade <= 92) {
      return true
    } else {
      return false
    }
      
  }
  function isFailing(grade) {
    if (grade < 60) {
      return true
    } else {
      return false
    }
  }
  
  function isAcing(grade) {
    if (grade > 92) {
      return true
    } else {
      return false
    }
  }

  function isStudent(str) {
    return str === "student";
  }

function isTeacher(str) {
  return str === "teacher";
}

function isAdmin(str) {
  return str === "admin";
}

function isElementary(str) {
  return str === "elementary";
}

function areDifferentPeople(nam1, nam2) {
  return nam1 !== nam2;
}

function isMiddleSchoolTeacher(role, levNum) {
  return role === "teacher" && levNum >= 6 && levNum <= 8;
}

function notAnElementarySchoolAdministrator(scLev, role) {
  if (scLev !== "elementary" || role !== "administrator") {
    return false
    } else if (scLev === "elementary" && role === "administrator") {
      return true
    } else if (scLev === "elementary" || role === "teacher") {
      return false
    } else {
      return true
    }
  }


  
  
  

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
