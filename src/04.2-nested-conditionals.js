function numberIsDivisible(number) {
  if (number <= 0) return "number is not positive"
  if (number % 6 === 0) return "Divisible by 2 and 3"
  if (number % 2 === 0) return "Divisible by 2"
  if (number % 3 === 0) return "Divisible by 3"
  return "Not divisible by 2 and 3"
  }