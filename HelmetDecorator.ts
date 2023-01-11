import EnemyDeorator from "./EnemyDecorator";
export class HelmetDecorator extends EnemyDeorator{
    takeDamage(): number {
        return this.enemy.takeDamage()/ 2;
    }
}