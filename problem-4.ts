{
    //

    type Circle = {
        shape : 'circle';
        radius : number;
    }
    type Rectangle = {
        shape : 'rectangle';
        width : number;
        height : number;
    }

    type Unions = Circle | Rectangle;

    function calculateShapeArea  (shapes : Unions) : number {

        let area : number = 0;

       if('radius' in shapes){
        
            area = Math.PI * (shapes.radius * shapes.radius);
            return parseFloat(area.toFixed(2));

       }else{

            area = shapes.width * shapes.height;
            return area;
       }
    }


    const circleArea : number = calculateShapeArea({
        shape : 'circle',
        radius : 5
    })
    console.log(circleArea);
    

    const rectangleArea : number = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6
      });
      console.log(rectangleArea);
      

      
    //
}