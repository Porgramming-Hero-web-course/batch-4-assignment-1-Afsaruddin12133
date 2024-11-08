{
    //
    function sumArray (array : number[]) : number{

        let sum = 0;
        array.map((num : number) => sum += num);
        return sum;
    }

    const result = sumArray([1,2,3,4,5]);
    console.log(result);
    
    //
}