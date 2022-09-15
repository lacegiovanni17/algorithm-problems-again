function groupGrades(grades) {
  var failed = 0;
  var passed = 0;
  var exceptional = 0;

  for (const grade of grades) {
    if (grade < 50) {
      failed++;
    } else {
      passed += 1;

      if (grade >= 90) {
        ++exceptional;
      }
    }
  }

  return { failed, passed, exceptional };
}

export default groupGrades;
