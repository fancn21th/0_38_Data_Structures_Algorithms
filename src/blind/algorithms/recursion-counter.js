const counter = n => {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
};

// at least one base case and one recursion case
const counterRecur = n => {
  if (n > 0) {
    counterRecur(n - 1);
    console.log(n);
  }
};

// counter(5);
counterRecur(5);
