var activated,target;
class Materializer{
    constructor(target) {
        this._target= target
        this.activated= false
      }
      get(target){
          return this._target
      }
    activate() {
        return this.activated = true
    }

    materialize(){
        if(activated==true){
            return target
        } else {
            return undefined
        }
    }
}

const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"