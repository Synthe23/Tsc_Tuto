"use strict";
// interfaces are used when -> object shapes that you want to expend
// supports declaration merging
// types are -> more general -> objects, unions, intersections, functions
// cant be reopened -> no merging
const boxDemo = { width: 32, height: 43 };
// type Bag = {size: number}
// type Bag = {color: string}
// We cant redeclare the type alias name so we get a error
