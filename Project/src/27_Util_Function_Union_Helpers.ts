// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>

function ExtractUserInfo(id: string, isExtractInfo = false) {
  return {
    id,
    name: "Omm",
    log: isExtractInfo ? "Details" : (undefined as string | undefined),
  };
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
type getUserParamsInfo = Parameters<typeof ExtractUserInfo>;

const argsInfo: getUserParamsInfo = ["u1", true];
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo);

class PersonN1{
    constructor(public name: string, public age: number){

    }
    greet(){
        return `Hi I am ${this.name}`
    }
}

type PersonInstanceN1 = InstanceType<typeof PersonN1>
type PersonCtorArgsN1 = ConstructorParameters<typeof PersonN1>

const resultInfo1: PersonCtorArgsN1 = ["Omm", 23]
const abc: PersonInstanceN1 = new PersonN1(...resultInfo1)

console.log(abc.greet());


