module.exports = function solveEquation(equation) {
  // your implementation
  var spl=equation.split(" ");
  var a = spl[0];
  var b = spl[3] + spl[4];
  var c = spl[7] + spl[8];
  var x1=Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a));
  var x2=Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a));
  var answer = [];
  answer.push(x1);
  answer.push(x2);
  if(answer[0]>answer[1]){
    answer.reverse();
  }
  return answer;
}
