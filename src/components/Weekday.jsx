function Weekday() {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let date = new Date()
  let day = date.getDay()

  return (
    <>
      <h3>Here is a list of weekdays starting today</h3>
      <ul>
      {weekDays.map((d, index) => {
        return (
          <li key = {index}>
            {weekDays[(index + day)%7]}
          </li>
          )
      })}
      </ul>
    </>
  )
}
export default Weekday