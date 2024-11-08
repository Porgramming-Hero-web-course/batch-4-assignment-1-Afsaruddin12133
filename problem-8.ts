{  
    //

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    
    const person :{
        name : string;
        age : number;
        email : string;
    } = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    
    const output: boolean = validateKeys(person, ["name", "age"]);
    console.log(output); 

    //
    
}