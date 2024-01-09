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

    