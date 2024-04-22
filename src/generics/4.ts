type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const userData: User = {
    name: "John",
    surname: "Doe",
    email: "john@example.com",
    password: "123456",
  };
  return { ...userData, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export {};
