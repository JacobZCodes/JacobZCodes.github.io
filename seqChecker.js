  function checkArithmetic(input) {
    const nums = input.split(',').map(x => parseFloat(x.trim()));
    if (verbosity === 1) {
      showNext();
    }
    if (nums.length < 5 || nums.some(isNaN)) {

      updateInnerModalHTML(`<h3 style="color: #000;">Please enter at least 5 valid numbers</h3>`);
      openModal();
      // alert("Please enter at least 5 valid numbers.");
      return;
    }

    const diff = nums[1] - nums[0];
    for (let i = 2; i < nums.length; i++) {
      if (Math.abs((nums[i] - nums[i - 1]) - diff) > 1e-6) {
        updateInnerModalHTML(`<h3 style="color: #000;">That's not a valid arithmetic sequence</h3>`);
        openModal();
        return;
      }
    }
    return true;
}

  function checkGeometric(input) {
    const nums = input.split(',').map(x => parseFloat(x.trim()));

    if (verbosity === 1) {
      showNext();
    }
    if (nums.length < 5 || nums.some(isNaN)) {
      updateInnerModalHTML(`<h3 style="color: #000;">Please enter at least 5 valid numbers</h3>`);
      openModal();
      return;
    }

    const ratio = nums[1] / nums[0];
    for (let i = 2; i < nums.length; i++) {
      if (Math.abs((nums[i] / nums[i - 1]) - ratio) > 1e-6) {
        updateInnerModalHTML(`<h3 style="color: #000;">That's not a valid geometric sequence</h3>`);
        openModal();
        return;
      }
    }
  }