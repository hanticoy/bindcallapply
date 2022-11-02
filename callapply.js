function Ninja(name, age){
    this.name = name;
    this.age = age;
    // ¡podría haber muchas otras cosas aquí!
  }
  function BlackBelt(name,age){
    //¡Comas!
    Ninja.call(this,name,age);
    this.belt = 'black';
  }
  function YellowBelt(name,age){
    //ARRAY
    Ninja.apply(this,[name,age]);
    this.belt = 'yellow';
  }
  let yB = new YellowBelt('mike', 40);
  let bB = new BlackBelt('charlie', 29);
  console.log(bB.name);
  console.log(yB.name);

  console.log('');

  function levelUp() {
    console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
  }
  let person = {
    name: 'Lisa',
    gender: 'her',
    language: 'JavaScript, duh!'
  };
  levelUp.call(person);
  
  