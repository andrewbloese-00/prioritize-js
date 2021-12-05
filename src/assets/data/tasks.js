const seedTasks = 
 [
  {
   "id":37321426033353170000,
   "name":"Final Project Submission",
   "date":"2021-12-05T23:59:00.000Z",
   "ttc":"1",
   "description":"complete project deadline for CIS300 final project. Everything needs to be DONE!!","isRepeating":false,"isComplete":false
  },
  {
   "id":91623620466243750000,
   "name":"CSE310 Final Exam ",
   "date":"2021-11-08T10:30:00.000Z",
   "ttc":"2",
   "description":"final exam for data structures and algorithms. ",
   "isRepeating":false,
   "isComplete":false
  },
  {
   "id":"Work_0",
   "name":"Work",
   "date":"2021-12-01T15:00:00.000Z",
   "ttc":"5",
   "description":"go to work ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Work_1",
   "name":"Work",
   "date":"2021-12-08T15:00:00.000Z",
   "ttc":"5",
   "description":"go to work ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Work_2",
   "name":"Work",
   "date":"2021-12-15T15:00:00.000Z",
   "ttc":"5",
   "description":"go to work ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Work_0",
   "name":"Work",
   "date":"2021-12-03T15:00:00.000Z",
   "ttc":"5",
   "description":"go to work ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Work_1",
   "name":"Work",
   "date":"2021-12-10T15:00:00.000Z",
   "ttc":"5",
   "description":"go to work ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Work_2",
   "name":"Work",
   "date":"2021-12-17T15:00:00.000Z",
   "ttc":"5",
   "description":"go to work ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"work_0",
   "name":"work",
   "date":"2021-12-04T10:00:00.000Z",
   "ttc":"10",
   "description":"work some more",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"work_1",
   "name":"work",
   "date":"2021-12-11T10:00:00.000Z",
   "ttc":"10",
   "description":"work some more",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"work_2",
   "name":"work",
   "date":"2021-12-18T10:00:00.000Z",
   "ttc":"10",
   "description":"work some more",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Study_0",
   "name":"Study",
   "date":"2021-12-01T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Study_1",
   "name":"Study",
   "date":"2021-12-02T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false
  },
  {
   "id":"Study_2",
   "name":"Study",
   "date":"2021-12-03T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false},
   {"id":"Study_3",
   "name":"Study",
   "date":"2021-12-04T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false
  },
  {"id":"Study_4",
   "name":"Study",
   "date":"2021-12-05T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false
  },
  {"id":"Study_5",
   "name":"Study",
   "date":"2021-12-06T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false
  },
  {"id":"Study_6",
   "name":"Study",
   "date":"2021-12-07T23:00:00.000Z",
   "ttc":"2",
   "description":"make sure to get some studying in for finals. ",
   "isRepeating":true,
   "isComplete":false
  },
  {"id":131940179559972240000,
   "name":"Doctor's Appointment",
   "date":"2021-12-07T14:30:00.000Z",
   "ttc":"1",
   "description":"go to the doctor",
   "isRepeating":false,
   "isComplete":false
  },
  {
   "id":65269456886728640000,
   "name":"CSE360 Final Exam",
   "date":"2021-12-09T07:30:00.000Z",
   "ttc":"4",
   "description":"final exam for intro to software engineering. make sure to study the different UML diagram symbols!",
   "isRepeating":false,
   "isComplete":false
  }
 ]

 export function seed(){
  if(!localStorage.getItem('tasks')){
   localStorage.setItem('tasks', JSON.stringify(seedTasks)) 
  }
 }