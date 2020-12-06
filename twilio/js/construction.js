function construct(myname) {
  let somePerson = {
    name : myname,
    material : 'human',
    assemble : true,
    duration : 1000,
  }
  return somePerson;
}

const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name);  // should be "Kevin"
console.log('duration is: ' + somePerson.duration);
