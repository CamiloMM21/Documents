import { Enemy } from "./Enemy";

export default class BaseEnemy implements Enemy{
    takeDamage(): number{
        return 10;

    }
}