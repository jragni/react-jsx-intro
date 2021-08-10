/** Displays for person's information: name, age*/

function Person(props) {
  return (
    <div>
      <p> {props.name.length > 8 ? props.name.slice(0, 5) : props.name} </p>
      <p> Learn some information this person </p>
      <p> {props.age >= 18 ? "Go Vote!" : "You must be 18"} </p>
      <ul>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
}

Person.defaultProps = {
  age: 17,
  name: "Billy",
  hobbies: ["swimming", "lifting", "eating"],
};
