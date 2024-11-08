{

    //

    interface Profile {
        name : string;
        age : number;
        email : string;
    }

    type partialType = {name : string} | {age : number } | {email : string};

    function updateProfile (obj : Profile, partialObj : partialType ) : Profile {

       return {...obj,...partialObj};
        
    }

    const myProfile : Profile = {
         name: "Alice", 
         age: 25, 
         email: "alice@example.com" 
    };

    const output : object = updateProfile(myProfile, { age:26});
    console.log(output);
    

    //
    
}