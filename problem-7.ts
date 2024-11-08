{
    //

     class Car{
        make : string;
        model : string;
        year : number;
        constructor(make :string , model : string , year : number){
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge (){
            return new Date().getFullYear() - this.year;
        }
     }

     const car = new Car("Honda", "Civic", 2018);
     const resultYear = car.getCarAge();
     console.log(resultYear);
     

    //
}