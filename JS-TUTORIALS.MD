# 1. JS Variables
    var name = 'My Le' OR "My Le"  | (Type String)
    var age = 26; | (Type number)
    var isFemale = true; | (Type Boolean)
    
    * Type Object 
    - Structure: const a = {}
    - Sample:
        var student = {
            name: 'Le',
            age: 26,
            sex: 'Female'
        };
    => student variable IS an Object
    - Read data in an Object
        const book = {
            title: 'Thinking Big',
            author: 'Donal Trump',
            publishYear: 2000
        };
        => book.title // Thinking Big
            book.author // Domal Trump
            book.publishYear // 2000
    
    * Type Array 
    - Structure: const a = [];
        + empty Array: []
        + const a = ['Huy', 'Le', 'Nhien']
            a.length = 3;
            a[0] = 'Huy'; a[1] = 'Le'; a[2] = 'Nhien'; a[3] = undefined
    - Sample:
        var numberArr = [1, 2, 3, 4, 5] // An array contains a number of range 1-5;
        var fruits = ['Banana', 'Orange', 'Apple'];
        var students = [
            { name: 'Le', age: 26, sex: 'F' },
            { name: 'Huong, age: 23, sex: 'F' }
        ];
    - Read data in an array;
    Sample: 
        var numberArr = [1, 2, 3, 4, 5]
            var firstObj = numberArr[0]; // firstObj = 1;
            numberArr.length = 5;
            numberArr[4];
    - Add an Object into An Array
    Ex: let a = ['Le', 'Huy'];
        a.push('Nhien') => So a will be: ['Le', 'Huy', 'Nhien'];
        or a[2] = 'Nhien' => a will also be ['Le', 'Huy', 'Nhien'];
    - Get Object Details in an Array
    Ex: let b = [{ title: 'Happy New Year', year: 2010 }, { title: 'Happy Birdthday', year: 2020 }]
        const data = b[0] => // b = {title: 'Happy New Year', year: 2010 }
                            // b.year = 2010
                            // b.title = 'Happy New Year'
# 2. JS Functions
    * Structure:
        var functionName = () => {
            // content here!
        };
        
    * Samples: 
    var calculateAge = (motherAge, childAge) => {
        var totalAge = motherAge + childAge;
        return totalAge;
    }