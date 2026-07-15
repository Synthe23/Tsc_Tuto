// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
//ConstructorParameters<C>

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
