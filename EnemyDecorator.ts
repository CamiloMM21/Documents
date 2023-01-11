import { Enemy } from "./Enemy";

export default abstract class EnemyDeorator implements Enemy{

    protected enemy: _Enemy;
     
    constructor(enemy: Enemy){
        this.enemy= enemy;
    }
    takeDamage(): number {
        return this.enemy.takeDamage();
    }
}