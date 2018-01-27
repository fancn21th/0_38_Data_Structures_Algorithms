const number_one = 3,
      number_two = 5;

// const Multiples = (range) => {
//   let i = number_one, sum = 0;
//   while(i < range) {
//     if (i % number_one === 0 || i % number_two === 0) {
//       sum += i;
//     }
//     i++;
//   }
//   return sum;
// };

const get_multiple_of_number= (range, number) => {
  let next = number, sum = 0, step = 1;
  while(next < range){
    sum += next;
    next = number * ++step;
  }
  return sum;
};

const Multiples = (range) => {
  return get_multiple_of_number(range, number_one) +
          get_multiple_of_number(range, number_two) -
          get_multiple_of_number(range, number_one * number_two);
};

export default Multiples;
