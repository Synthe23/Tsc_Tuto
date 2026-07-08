// Interface - An interface in TypeScript is a virtual contract that defines the exact structural shape an object, class, or function must follow. They exist solely for compile-time type-checking and are completely removed when compiled into JavaScript, leaving zero runtime overhead.

// 1>
interface User333 {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = {
  id: 1,
  name: "Omm",
  email: "mishraomm5000@gmail.com",
  createdAt: new Date(),
};

// 2> Single inheritance
interface Admin333 extends User333 {
  permissions: string[];
}
// Admin333 will inherit all the properties of the User333 along with the new properties
const admin333: Admin333 = {
  id: 2,
  name: "Synthe",
  email: "mishraomm5001@gmail.com",
  createdAt: new Date(),
  permissions: ["Read", "Write", "Read-Write"],
};

// 3> Multi inheritance
interface withMeta {
  meta: {
    active: boolean;
  };
}

interface AdminWithMeta extends Admin333, withMeta {}

const adminwithmeta: AdminWithMeta = {
  id: 2,
  name: "Synthe",
  email: "mishraomm5001@gmail.com",
  createdAt: new Date(),
  permissions: ["Read", "Write", "Read-Write"],
  meta: {
    active: true,
  },
};
