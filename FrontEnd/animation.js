// import Matter from "matter-js";
// import "matter-wrap"; 
// import "matter-attractors"; 

// export const runMatter = () => {
//   const wrapper = document.getElementById("wrapper-canvas");
//   if (!wrapper) return;

//   wrapper.innerHTML = ""; // Clear previous canvas

//   const engine = Matter.Engine.create();
//   const render = Matter.Render.create({
//     element: wrapper,
//     engine: engine,
//     options: {
//       width: window.innerWidth,
//       height: window.innerHeight,
//       background: "transparent",
//       wireframes: false,
//     },
//   });

//   const world = engine.world;

//   // Create walls to keep balls within the screen
//   const boundaries = [
//     Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, { isStatic: true }),
//     Matter.Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, { isStatic: true }),
//     Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
//     Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
//   ];
//   Matter.World.add(world, boundaries);

//   // Ball generator
//   const balls = [];
//   const addBall = (x, y) => {
//     const ball = Matter.Bodies.circle(x, y, 10, {
//       render: { fillStyle: "#333" },
//       restitution: 0.8,
//       friction: 0.02,
//     });
//     Matter.World.add(world, ball);
//     balls.push(ball);
//   };

//   // Mouse movement to generate balls
//   window.addEventListener("mousemove", (event) => addBall(event.clientX, event.clientY));

//   // Remove old balls
//   setInterval(() => {
//     if (balls.length > 100) Matter.World.remove(world, balls.shift());
//   }, 100);

//   Matter.Engine.run(engine);
//   Matter.Render.run(render);
// };
