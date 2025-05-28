// Задание 1
interface User {
  id: number;
  name: string;
  age?: number;
  email?: string;
}

const user1: User = { id: 1, name: "Ivan", age: 43 };
const user2: User = {
  id: 2,
  name: "Olga",
  age: 14,
  email: "olga123@gmail.com",
};
const user3: User = { id: 3, name: "Alex" };

// Задание 2
interface Admin extends User {
  role: "admin" | "superadmin";
}

const adminUser: Admin = {
  id: 4,
  name: "Vladimir",
  age: 44,
  email: "admin@mail.ru",
  role: "superadmin",
};

//Задание 3
function getWordForAge(age: number): string {
  if (age % 100 >= 11 && age % 100 <= 14) {
    return "лет";
  }

  if (age % 10 === 1) {
    return "год";
  }

  if (age % 10 >= 2 && age % 10 <= 4) {
    return "года";
  }

  return "лет";
}

function greetUser(user: User): string {
  let result = `Привет, ${user.name}!`;
  if (user.age !== undefined) {
    result += ` Тебе ${user.age} ${getWordForAge(user.age)}.`;
  }
  return result;
}

console.log(greetUser(user1));

// Задание 5
enum UserRole {
  Admin,
  User,
  Guest,
}

interface ImprovedAdmin extends User {
  role: UserRole;
}

const adminUser2: ImprovedAdmin = { id: 5, name: "Oleg", role: UserRole.Admin };

//Задание 6
const UserStatus = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;

type UserStatusType = (typeof UserStatus)[keyof typeof UserStatus];

//Задание 7
class Car {
  make: string;
  model: string;
  year: number;
  mileage: number = 0;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive(distance: number): void {
    this.mileage += distance;
  }

  getDescription(): string {
    return `Машина: ${this.make}, модель: ${this.model}, год выпуска: ${this.year}, проехала: ${this.mileage}`;
  }
}

const priora = new Car("Lada", "Priora", 2010);
priora.drive(100);
console.log(priora.getDescription());

//Дополнительное 1
type Status = "active" | "inactive" | 0 | 1;

//Дополнительное 2
interface UserWithStatus extends User {
  status: Status;
}

const activeUser: UserWithStatus = { id: 10, name: "Artem", status: "active" };

//Дополнительное 3
function getStatusDescription(status: Status): string {
  if (status === "active" || status === 1) {
    return "Активный пользователь";
  } else {
    return "Неактивный пользователь";
  }
}
