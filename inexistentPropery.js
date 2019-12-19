class inexistentPropClass{
    existingMethod() {
      this.x++;
    }
  
    constructor() {
      this.x = 0;
    }
}

var myInexistent = new inexistentPropClass();
myInexistent.inexistentProperty();


