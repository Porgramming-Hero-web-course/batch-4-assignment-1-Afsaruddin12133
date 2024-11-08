# 🤔 Why are Type Guards Necessary?

If you want to write safe,clean and error free variable befor using it, you must have to use type guards features otherwise it will cause an error in typescript.

In other words we can say that type guards is like a military checkpoint that detects dangerous people in a area (👮‍♂️=>🚨=>❗️). In the same way when we write a code in typescript  type guards do the same job to check the variable type are correct or not.

#### Example of Type Guards : 

```typescript
function typeDetection(value : string | number): string {
        if(typeof value === 'string'){
            return `${value.length} is a lenght of  String.`;
        }else{
            return `${value} is a Number.It has no length.`
        }
    }
    
    const result1 : string = typeDetection('123');
    const result2 : string = typeDetection(123);

    console.log(result1);
    console.log(result2);

```
#### Example of Without Type Guards :

```typescript
 function typeDetection(value : string | number): string {
        
     return `${value.length} is a lenght of  String. ${value} is a Number.It has no length.`;
        
    }
    
    const result2 : string = typeDetection(123);
    console.log(result2);
```

In this example, The value is a number, the code will try to access `value.length`, which only exists on strings. This will cause an error at runtime, because numbers don’t have a `length` property. That's why it is necessary to use type guards in typescript.

# 💬 Discuss Various Types of Type Guards and Their Use Cases.

There are three type of type guards in typescript : 

1. typeof
2. instanceof
3. in

#### 🛡️typeof 

typeof is use for primitive types in union types such as `number | string` to handle diffrent actions based on type.
```typescript
    type Union = string | number;

    function detectSting(param : Union) {
        (param === 'string')? console.log('Yes') : console.log('No');
    }

    const output = detectSting('Md.Afsar Uddin'); 
```
`Output : "Yes"`

#### 🗡️instanceof

The instanceof type guard allows you to check if an object is an instance of a specific class. It use to make a diffrent between classes in a union type.

```typescript
    class Dog {
        bark() {
            console.log("gaui gaui!");
        }
    }
    
    class Cat {
        meow() {
            console.log("Meow Meow!");
        }
    }
    
    function Animal(animal: Dog | Cat) {
        if (animal instanceof Dog) {
            animal.bark();
        } else {
            animal.meow();
        }
    }
    const dog = new Dog();
    Animal(dog);
```

`Output : "Gaui Gaui!"`

#### 🔒in

when we are deling with object or interfaces in that time we can use `in`.  

```typescript
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
```
`Output : 78.54`

`Output : 24`

#### 🆚 in vs instanceof

1. When you’re working with objects or interfaces and need to check for specific properties rather than the class type.
2. When you have class instances and want to check the actual type of the instance.

*************That's all from my side. Thanks for reading my blog.*************
