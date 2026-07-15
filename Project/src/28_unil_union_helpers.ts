// Exclude<U, V> -> remove from U those members assignable to V
// Extract<U, V> -> keep from U those members assignable to V
// notNullable

//! i> Exclude 
type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup"
type EventType2 = Exclude<EventType1, "keydown">

function handleEvent1(e: EventType2){
    console.log(e);
}
// handleEvent1('hover')


// type ActionsN1 = 'create' | 'read' | 'update' | 'delete'
// type ActionsN2 = Exclude<ActionsN1, "delete">

// function handleUpdate(e: ActionsN2){
//     console.log(e);
// }
// handleUpdate('create')

//! ii> Extract
type ActionsN1 = 'create' | 'read' | 'update' | 'delete'
type ActionsN2 = Extract<ActionsN1, "create" | "update" | "delete">

function handleEvent2(e: ActionsN1){
    console.log(e); 
}

// handleEvent2('read')

type mayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<mayBeNumber>

function sqauerFucntion(num: CleanNumber){
    return num * 2
}
// sqauerFucntion(10);
// sqauerFucntion(null);