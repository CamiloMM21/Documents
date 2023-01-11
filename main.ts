import { ArmourDecorator } from "./ArmourDecorator";
import BaseEnemy from "./BaseEnemy";
import { HelmetDecorator } from "./HelmetDecorator";
let enemy = new BaseEnemy();
let EnemywithHelmet =new HelmetDecorator(enemy);
let EnemywithHelmetAndArmour = new ArmourDecorator(EnemywithHelmet)
let comutedDamaged = EnemywithHelmet.takeDamage();
console.log(comutedDamaged);