const DAY_IN_MS = 86400000;



export default function Task(id, name, date, ttc, desc, isRepeating)
{
 this.id = id
 this.name = name
 this.date = date
 this.ttc = ttc
 this.description = desc
 this.isRepeating = isRepeating
 this.isComplete = false
}


