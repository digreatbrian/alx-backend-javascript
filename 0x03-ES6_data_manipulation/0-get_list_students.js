/**
   * Returns an array of objects with attributes: id(Number), firstName(String), and location(String)
  */
function getListStudents() {
  let people = [
    {firstName:"Guillaume", id:1, location:"San Francisco"},
    {firstName:"James", id:2, location: "Columbia"},
    {firstName:"Serena", id:2, location="San Francisco"}
    ];
  return people;
}

export { getListStudents };
