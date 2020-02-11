import { Constant, Service } from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { User } from "../../models/User";
import { MemoryStorage } from "../storage/MemoryStorage";

@Service()
export class UsersService {

  @Constant("user.token")
  useToken: boolean;

  constructor(private memoryStorage: MemoryStorage) {
    this.memoryStorage.set("users", require("../../../resources/users.json").map((o) => {
      return Object.assign(new User, o);
    }));
  }

  /**
   * Find a user by his ID.
   * @param id
   * @returns {undefined|User}
   */
  async getUserById(id: string): Promise<User> {
    const users: User[] = await this.query();
    console.log(users);
    
    return users.find(user => user.username === id);
  }

  /**
   * Create a new User
   * @returns {{id: any, name: string}}
   * @param newUser
   */
  async create(newUser: User): Promise<User> {
    const user = new User();
    user.id = require("node-uuid").v4();
    user.username = newUser.username;

    const users = this.memoryStorage.get<User[]>("users");

    users.push(user);

    this.memoryStorage.set("users", users);

    return user;
  }

  /**
   *
   * @returns {User[]}
   */
  async query(): Promise<User[]> {
    return this.memoryStorage.get<User[]>("users");
  }

  /**
   *
   * @param updatedUser
   * @returns {User}
   */
  async update(updatedUser: Partial<User>): Promise<User> {
    const users = await this.query();

    const index = users.findIndex((value: User) => value.id === updatedUser.id);

    users[index].username = updatedUser.username;

    this.memoryStorage.set("users", users);

    return users[index];
  }

  /**
   *
   * @param id
   * @returns {Promise<User>}
   */
  async remove(id: string): Promise<User> {

    const user = await this.getUserById(id);

    if (!user) {
      throw new NotFound("User not found");
    }

    const users = await this.query();

    this.memoryStorage.set("users", users.filter(user => user.id === id));

    return user;
  }
}
