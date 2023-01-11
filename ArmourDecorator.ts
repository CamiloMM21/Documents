import EnemyDeorator from "./EnemyDecorator";
export class ArmourDecorator extends EnemyDeorator{
    takeDamage(): number {
        return this.enemy.takeDamage() / 1.5;
    }
}