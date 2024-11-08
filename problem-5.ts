{
    //

    function getProperty <T,E extends keyof T>(person : T,propertyName : E ) : T[E] {

        const value  = person[propertyName];
       return value; 

    }

    const person : {
        name : string;
        age : number;
    } = {
        name : 'Alice',
        age : 30
    }

    const output : string | number = getProperty(person,"name"); 
    console.log(output);
    

    //
}