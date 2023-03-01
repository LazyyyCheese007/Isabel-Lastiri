var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","9de123a6-8f25-4e1c-a7dd-3937878c99dd","f0940db3-7c40-4206-990d-8844fda4215b","cf6be7e4-8f05-44e8-baf4-a2f9a303d242"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":282,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"9tCBtZBz50K9VQCNo0qiErIOd8LRWBKp","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":243},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":343,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"rAmhuKrkjKwU8kveCkBLsO.C.Ahtl.mi","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":343,"y":398},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"7K3CQRKuUS6Qpab_KYhLTwvjdLvRBnIQ","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"5b86CUGdRhMdWHEmMyVN5qWVFOiod7UV","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"VMmm1mitLa3NLb58Q__lZJ262GFfE7vL","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":400},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"9de123a6-8f25-4e1c-a7dd-3937878c99dd":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NaBN125bVEAAwWDYsOQkR199FhAllj3","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png"},"f0940db3-7c40-4206-990d-8844fda4215b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NaBN125bVEAAwWDYsOQkR199FhAllj3","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png"},"cf6be7e4-8f05-44e8-baf4-a2f9a303d242":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NaBN125bVEAAwWDYsOQkR199FhAllj3","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("hero1");
hero.scale=.2;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(10,0);


function draw() {
  
//fondo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_accent/puzzle_game_accent_a_04.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_accent/puzzle_game_accent_a_04.mp3")
 hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
