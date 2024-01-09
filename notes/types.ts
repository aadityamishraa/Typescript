// ---Type Alias---
    type Employee = {
        id: number;
        name: string;
        retrie: (date: Date)=>void;
    }

// ---Union Types---
    let weight: Number | String = 1;

//---Intersection Types---
    let UIWidget= Draggable & Dropable;

//---Literal Types---
    type Quantity = 50 | 100;

//---Nullable Types---
    let name: string | null = null;

//---Optional Chaining---
    customer?.birthdate?.getFullYear();
    customer?.[0];
    log?.('message');

//---Nullish Coalescing Operator---
    someValue ?? 30

// ---Type assertion---
    obj as Person

// ---The unknown Type---
    function render(document: unknown){
        // We have to narrow down to a specific 
        // type before we can perform any operations
        // on an unknown type.
        if(typeof document=== 'string'){
            
        }
    }

//---Never Type---
    function processEvents(): never { 
        // This function never returns because 
        // it has an infinite loop.
        while (true) {}
    }
   