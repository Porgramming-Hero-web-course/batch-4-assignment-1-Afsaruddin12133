{
    //

    function removeDuplicates (array : number[]) : number[] {

       const newArray : number[] =  array.filter((data : number,index : number) => array.indexOf(data) === index);

        return newArray;
    }

    const result = removeDuplicates([1,2,2,3,4,4,5]);
    console.log(result);
    

    //
}