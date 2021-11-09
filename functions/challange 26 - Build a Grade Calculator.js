let gradeCalc = function (stdScore, totalScore) {
  let percentage = (stdScore / totalScore) * 100;
  if (percentage > 90) {
    return ` You got a A with score of ${percentage} `;
  } else if (percentage > 80) {
    return ` You got a B with score of ${percentage} `;
  } else if (percentage > 70) {
    return ` You got a C with score of ${percentage} `;
  } else if (percentage > 60) {
    return ` You got a D with score of ${percentage} `;
  } else {
    return ` You got a F with score of ${percentage} `;
  }
};

// let Ahmed1 = gradeCalc(20, 100);
// let Ahmed2 = gradeCalc(99, 100);
// let Ahmed3 = gradeCalc(81, 100);
// let Ahmed4 = gradeCalc(10, 16);

// console.log(Ahmed1);
// console.log(Ahmed2);
// console.log(Ahmed3);
// console.log(Ahmed4);

// Andrew Solution:

let gradeCalc2 = function (stdScore, totalScore) {
  if (typeof stdScore !== 'number' || totalScore  !== 'number'){
    throw Error ('Not a valid grade')
  }

  let percentage = (stdScore / totalScore) * 100;
  let letterGrade = "";
  if (percentage > 90) {
    letterGrade = "A";
  } else if (percentage > 80) {
    letterGrade = "B";
  } else if (percentage > 70) {
    letterGrade = "C";
  } else if (percentage > 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return ` You got a ${letterGrade} with score of ${percentage} `
  }



try {
  const Ahmed5 = gradeCalc2(20, 100);
  console.log(Ahmed5);
} catch (e){
  console.log(e)
}

// let Ahmed5 = gradeCalc(20, 100);
// let Ahmed6 = gradeCalc(99, 100);
// let Ahmed7 = gradeCalc(81, 100);
// let Ahmed8 = gradeCalc(10, 16);

// console.log(Ahmed5);
// console.log(Ahmed6);
// console.log(Ahmed7);
// console.log(Ahmed8);
