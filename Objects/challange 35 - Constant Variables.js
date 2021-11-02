const gradeCalc = function (stdScore, totalScore) {
    const percentage = (stdScore / totalScore) * 100;
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
  
  const Ahmed1 = gradeCalc(20, 100);
  const Ahmed2 = gradeCalc(99, 100);
  const Ahmed3 = gradeCalc(81, 100);
  const Ahmed4 = gradeCalc(10, 16);
  
  console.log(Ahmed1);
  console.log(Ahmed2);
  console.log(Ahmed3);
  console.log(Ahmed4);
  
  // Andrew Solution:
  
  const gradeCalc2 = function (stdScore, totalScore) {
    const percentage = (stdScore / totalScore) * 100;
    const letterGrade = "";
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
  };
  
  
  const Ahmed5 = gradeCalc(20, 100);
  const Ahmed6 = gradeCalc(99, 100);
  const Ahmed7 = gradeCalc(81, 100);
  const Ahmed8 = gradeCalc(10, 16);
  
  console.log(Ahmed5);
  console.log(Ahmed6);
  console.log(Ahmed7);
  console.log(Ahmed8);
  