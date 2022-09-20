const source = { english: {
  locale: 'en-US',
  hey: "Hi",
  toReceive: "To receive",
  received: "Received",
  moneySymbol: "U$",
  todayClasses: "Today classes",
  subject: "Subject",
  subjects: [
      {label: 'Piano', value: 0},
      {label: 'Organ', value: 1},
      {label: 'Musical Theory', value: 2}
    ],
  paymentDay: "Payment Day",
  day: "Day",
  frequency: "Frequency",
  frequencies:[
      {label: 'Weekly', value: 0},
      {label: 'Biweekly', value: 1}
    ],
  time: 'Time',
  newStudentTitle: "New Student",
  name: "Name",
  startDate: 'Start Date',
  month: 'Month',
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  day: 'Day',
  weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  save: 'Save'

}}
const subject = 'Piano'
const texts = source.english
let sub = texts.subjects.filter(x => x.label === 'Piano')[0].value
texts.subjects.filter(x => x.label === subject)[0].value,

console.log(sub)