// Generics class
    class KeyValuePair<K, V>{
        constructor (public key: K, public value: V){

        }
    }

    let pair = new KeyValuePair<number, string>(1, 'Aaditya');
    // the typescript compiler sometimes infer
    // generic type arguments so we don't need  to specify them
    let pair = new KeyValuePair(2, 'Mishra');

// Generics Function
    function wrapInArray<T>(value: T){
        return [value];
    }
    let number= wrapInArray(1);

// Generics Interface
    interface Result<T>{
        data : T | null;
    }

// Generics Constraints
    function echo<T extends number | string> (value: T){}
    
    //Restrict using a shape object
    function echo<T extends {name: string}>(value: T){}

    //Restrict using an interface or class
    function echo<T extends Person>(value: T){}

//Extending generic classes
    //passing on generic type parameters
    class CompressibleStore<T> extends Store<T>{}

    //constraining generic type parameters
    class SearchableStore<T> extends {name: string}> extends Store<T>{}

    //fixing generic type parameters
    class ProductStore<T> extends Store<Product>{}


//---The keyof Operator---
    interface Product{
        name: string;
        price: number;
    }

    let property: keyof Product;
    //same as 
    let property: 'name' | 'price';

    property = 'name'; 
    property = 'price';
    property = 'othervalue'; // invalid

// Type mapping
    type ReadOnly<T>{
        readonly [K in keyof T]: T[K];
    };

    type Optional<T>{
        [K in keyof T]?: T[K];
    };

    type Nullable<T>{
        [K in keyof T]: T[K] | null;
    };

// Utility types
    interface Product{
        id: number;
        name: string;
        price: number;
    }

    // A Product where all properties are optional 
    let product: Partial<Product>;
    // A Product where all properties are required
    let product: Required<Product>;
    // A Product where all properties are read-only
    let product: Readonly<Product>;
    // A Product with two properties only (id and price)
    let product: Pick<Product, 'id' | 'price'>;
    // A Product without a name 
    let product: Omit<Product, 'name'>;
