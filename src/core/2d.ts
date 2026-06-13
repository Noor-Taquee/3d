// import { sqrt } from "math";

/** **Electrostatic constant** */
const K = 9*(10**9)

/** **Gravitational constant** */
const G = 50

export type i2d = {
  x: number;
  y: number;
}

export class Body {
  constructor(name: string, mass: number, charge: number) {
    this.name = name;
    this.mass = mass;
    this.charge = charge;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.force = { x: 0, y: 0 };
  }
  
  name: string;
  mass: number;
  charge: number;
  position: i2d;
  velocity: i2d;
  acceleration: i2d;
  force: i2d;

  calculate() {
    
  }
}

export class Area {
  constructor() {
    this.bodies = [];
  }

  bodies: Body[]
  
  register(body: Body) {
    this.bodies.push(body);
  }

  calculate() {
    this.bodies.forEach((body, i) => {
      this.bodies.forEach((body_2, j) => {
        if (i==j) return;
        
        // MARK: distance
        const dx = body.position.x - body_2.position.x
        const dy = body.position.y - body_2.position.y
        const dis = Math.sqrt(dx*dx + dy*dy)
        if (dis == 0) return;
        
        // MARK: gravitational force
        const g_force = G * body.mass * body_2.mass / (dis * dis)
        body_2.force.x += g_force * dx/dis
        body_2.force.y += g_force * dy/dis
        
        // MARK: electrostatic force
        const e_force = K * body.charge * body_2.charge / (dis * dis)
        body_2.force.x += e_force * dx/dis
        body_2.force.y += e_force * dy/dis
      });

      body.calculate();
    });
  }
}
