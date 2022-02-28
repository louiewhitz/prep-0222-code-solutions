const person =
  {
    firstName: 'Lala ',
    lastName: 'Wowzer',
    hobby: 'Skiing',
    job: ' writer',
    previousJob: ' professional surfer'
  };
console.log(person.firstName,
  person.lastName,
  person.hobby,
  person.job,
  person.previousJob);
var fullName = person.firstName + person.lastName;
console.log("The person's name is", fullName);
var job = person.job;
console.log("The person's current job is:", job);
var previousJob = person.previousJob;
console.log("The person's previous job was:", previousJob);
console.log(person);
