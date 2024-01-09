// ---Exporting and Importing---

    // shapes.ts
    export class Circle{}
    export class Square{}

    // app.ts
    import {Circle, Square} from './shapes.ts';


// ---Default Exports---

    //shapes.ts
    export default class Circle{}

    //app.ts
    import Circle from './shapes.ts';


// ---Wildcard Imports---

    //app.ts
    import * as shapes from './shapes.ts';

    let circle = new shapes.Circle();

// Re-exporting

    // shapes/index.ts
    export Circle from './circle';
    export Square from './square';

    // app.ts
    import {Circle, Square} from './shapes';

