// interfaces are used when -> object shapes that you want to expend
// supports declaration merging
// types are -> more general -> objects, unions, intersections, functions
// cant be reopened -> no merging

interface Box1 {
    width: number
}

interface Box1 {
    height: number
}

const boxDemo: Box1 = {width: 32, height: 43};

// type Bag = {size: number}
// type Bag = {color: string}
// We cant redeclare the type alias name so we get a error
