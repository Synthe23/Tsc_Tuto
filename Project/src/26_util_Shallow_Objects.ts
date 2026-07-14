// partial <T> -> make all the top level fields optional

type AddressN8 = {
  line1: string;
  city: string;
};

type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AddressN8; // address is nested object
};

type userPatch10 = Partial<User10>;
const patch10: userPatch10 = { name: "Omm" };
const patch11: userPatch10 = { address: { line1: "line1", city: "BBSR" } };

// Required <T>
type userAllRequiredN10 = Required<User10>;
const userAllPatch11: userAllRequiredN10 = {
  id: "u2",
  name: "Omm",
  address: { line1: "l-1", city: "c2" },
  email: "test@gmail.com",
};

// ReadOnly<T>
type readOnlyUserN10 = Readonly<User10>;
const readOnlyUser: readOnlyUserN10 = {
  id: "u3",
  name: "name",
  address: {
    line1: "line3",
    city: "city3",
  },
};

// Pick <T, K> -> keep only some keys
type publicUserN10 = Pick<User10, "id" | "name">;
const publicUser: publicUserN10 = { id: "u5", name: "Omm123" };

// Omit<T, K> - remove some keys
type UserWithoutEmailN10 = Omit<User10, "email">;
const omitUserN10: UserWithoutEmailN10 = {
  id: "u2",
  name: "Synthe_23",
  address: { line1: "line2", city: "C2" },
};
// omitUserN10.email = 'that'; // Invalid as we ommitted the email

// Record <K, V>
type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User10>;

const dirN10: RoleCheck = {
  admin: { id: "u10", name: "admin", address: { line1: "l1", city: "c1" } },
  user: { id: "u11", name: "user", address: { line1: "l2", city: "c2" } },
  editor: { id: "u12", name: "editor", address: { line1: "l3", city: "c3" } },
};
