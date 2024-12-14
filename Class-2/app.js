

const student = {
    name: "Alice",
    age: 15,
    grade: "10th",
    scores: {
        math: 85,
        science: 75,
        english: 75,
    },
    hasPerfectAttendance: true,
    extraCurricular: {
        participatesInSports: true,
        participatesInDrama: false,
        participatesInMathClub: true,
    },
    behavior: {
        hasDetention: false,
        isRespectful: true,
    },
    guardian: {
        relation: "Father",
        name: "John Doe",
    },
    awards: ["Math Excellence"],
};

/* 1. Is the student eligible for a Science Award? 
- Science score is greater than or equal to 80.
- The student has perfect attendance.
- The student has no detentions. */

// Solution Of Problem 1:
  if(student.scores.science >= 80 && student.hasPerfectAttendance && !student.behavior.hasDetention){
    console.log("Student is eligible for Science Award");

  }else{
    console.log("Student is not eligible for Science Award");
  }


/* 2. Does the student qualify for the Sports Program? 
- The student participates in sports OR 
- The student has perfect attendance AND their math score is equal to 85. */

// Solution Of Problem 1:

if(student.extraCurricular.participatesInSports || student.hasPerfectAttendance && student.scores.math === 85){
    console.log("Student qualify for Sports Program");
}else{
    console.log("Student does not qualify for Sports Program");
}


/* 3. Does the student need extra help in English? 
- English score is less than 70 AND the student does not participate in Drama Club OR
- The student's guardian is their father. */

if(student.english < 70 && student.extraCurricular.participatesInDrama || student.guardian.relation === "Father"){
    console.log("Student needs extra help in English");
}else{
    console.log("Student does not need extra help in English");
}


/* 4. Is the student eligible for Math Club Leader? 
- The student participates in Math Club.
- Math score is greater than 80.
- The student's behavior is respectful.
- The student has at least one award. */

    if(student.extraCurricular.participatesInMathClub && student.scores.math >80  && student.behavior.isRespectful && student.awards.length > 0){
        console.log("Student is eligible for Math Club Leader");
    }else{
        console.log("Student is not eligible for Math Club Leader");
    }

