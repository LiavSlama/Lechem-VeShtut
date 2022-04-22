
kaboom({
  background: [0,0,0]
});


loadSprite("omer","sprites/omer.png");
loadSprite("ima","sprites/ima.png");
loadSprite("zona","sprites/zona.png");
loadSprite("cake2","sprites/cake2.png");
loadSprite("cake3","sprites/cake3.png");
loadSprite("cake4","sprites/cake4.png");
loadSprite("dog-lady","sprites/dog-lady.png");
loadSprite("liav&omer","sprites/liav&omer.png");
loadSprite("omer-zombies","sprites/omer-zombies.jpg");
loadSprite("sky","sprites/sky.jpg");
loadSprite("dog","sprites/dog.jpg");
loadSprite("forrest","sprites/evil-forrest.webp");
loadSprite("bg","sprites/coffe.webp");
loadSound("witch", "sounds/witch-sound.mp3");
loadSound("michael", "sounds/michael.mp3");
loadSound("lets-go","sounds/Full Trunk - Let's Go (Official Video).mp3")
loadSound("squid", "sounds/squid.mp3");
volume = 0.5;
layers([
    "omer-zombies",
    "sky",
    "bg",
    "forrest",
    "dog",
    "game",
    "ui",
], "game");
const squidMusic = play("squid");
scene("help-omer", () => {
  add ([
    text("Help Omer Save", {size: 60}),
    pos(0,120),
    color(251, 230, 139),
  ])
  add ([
    text("Lechem VeShut", {size: 60}),
    pos(0,200),
    color(251, 230, 139),
  ])
  add ([
    text("From CORONA Customers", {size: 60}),
    pos(0,280),
    color(251, 230, 139),
  ])
  add ([
    text("press space to start", {size: 50}),
    pos(0,475),
    color(0,200,50),
  ])
  keyPress("space", () => {
    burp();
    go("level-3");
  });
})

scene("level-1-pre", () => {
  add ([
    text("Level 1 : The ZONA", {size: 60}),
    pos(0,120),
    color(255, 255, 255),
  ])
  wait(2, () => {
    add ([
    text("FIGHT", {size: 60}),
    pos(280,280),
    color(251, 0, 0),
  ])
  })
  wait(4.5, () => {
    go('level-1');
  })
})

scene("level-1", () => {
  const omer = add ([
  sprite("omer"),
  pos(-20,120),
  scale(0.5),
  area(),
  ])
  add ([ 
    text("shoot by pressing mouse",  {size: 50}),
    color(0,255,0),
  ])
  const score = add([
    text("Score: 0"),
    pos(425, 475),
    { value: 0 },
    color(250, 59, 240),
  ]);
  wait(2, () => {
    function createEnemy(){
    add ([
      sprite("zona"),
      pos(width(),rand(185, height()-275)),
      scale(0.3),
      area(),
      move(180, 200),
      "enemy",
    ]);
  }
  loop(0.8, () => {
    createEnemy();
  })
  });
  function omerWeapons() {
    const startPos = add ([
      sprite("cake2"),
      pos(300, height()/2),
      scale(0.05),
      area(),
      "weapon",
    ]);
  }
  omerWeapons();
  let dest = 145;
    action("weapon", (weapon) => {
    weapon.moveTo(dest, 480);
  })
  mouseClick(() => {
	dest = mousePos();
  });
  omer.collides("enemy", (e) => {
		destroy(e)
		destroy(omer)
		shake(40)
    wait(0.5, () => {
      go("death");
    });
  });
  collides("enemy", "weapon", (e,w) => {
		destroy(e);
    destroy(w);
    score.value += 1;
    score.text = "Score:" + score.value;
     if (score.value === 10) {
        squidMusic.pause();
        go("omer-walk-1");
    }
    dest = 145 ;
    omerWeapons();
    burp();
		}); 
});

scene("omer-walk-1", () => {
  const mjMusic = play("michael");
  const omer = add ([
  sprite("omer"),
  pos(-20,120),
  scale(0.5),
  area(),
  move(5, 80),
  ])
  wait(11, () => {
    mjMusic.pause();
    go("level-2-pre");
  })
})

scene("level-2-pre", () => {
  squidMusic.play();
  add ([
    text("Level 2 : The IMA", {size: 60}),
    pos(0,120),
    color(255, 180, 180),
  ])
  wait(2, () => {
    add ([
    text("FIGHT", {size: 60}),
    pos(280,280),
    color(251, 0, 0),
  ])
  })
  wait(4.5, () => {
    go('level-2');
  })
})

scene("level-2", () => {
  const omer = add ([
  sprite("omer"),
  pos(-20,120),
  scale(0.5),
  area(),
  ])
  const score = add([
    text("Score: 0"),
    pos(425, 475),
    { value: 0 },
    color(250, 59, 240),
  ]);
  function createEnemy(){
    add ([
      sprite("ima"),
      pos(width(),rand(120, height()-290)),
      scale(0.2),
      area(),
      move(180, 200),
      "enemy",
    ]);
  }
  loop(0.5, () => {
    createEnemy();
  })
  function omerWeapons() {
    const startPos = add ([
      sprite("cake3"),
      pos(300, height()/2),
      scale(0.05),
      area(),
      "weapon",
    ]);
  }
  omerWeapons();
  let dest = 145;
    action("weapon", (weapon) => {
    weapon.moveTo(dest, 480);
  })
  mouseClick(() => {
	dest = mousePos();
  });
  omer.collides("enemy", (e) => {
		destroy(e)
		destroy(omer)
		shake(40)
    wait(0.5, () => {
      go("death");
    });
  });
  collides("enemy", "weapon", (e,w) => {
		destroy(e);
    destroy(w);
    score.value += 1;
    score.text = "Score:" + score.value;
     if (score.value === 15) {
      squidMusic.pause();
      go("omer-walk-2");
    }
    dest = 145 ;
    omerWeapons();
    burp();
		}); 
})

scene("omer-walk-2", () => {
  const mjMusic = play("michael");
  const omer = add ([
  sprite("omer"),
  pos(-20,120),
  scale(0.5),
  area(),
  move(5, 80),
  ])
  wait(10, () => {
    mjMusic.pause();
    go("level-3-pre");
  })
})

scene("level-3-pre", () => {
  squidMusic.play();
  add ([
    text("The DOG-MOM", {size: 85}),
    pos(0,120),
    color(50, 50, 255),
    shake(40),
  ])
  wait(2, () => {
    add ([
    text("FIGHT", {size: 60}),
    pos(280,280),
    color(251, 0, 0),
  ])
  })
  wait(4.5, () => {
    go('level-3');
  })
})

scene("level-3", () => {
  const omer = add ([
  sprite("omer"),
  pos(-20,120),
  scale(0.5),
  area(),
  ])
  const score = add([
    text("Score: 0"),
    pos(425, 475),
    { value: 0 },
    color(250, 59, 240),
  ]);
  function createEnemy(){
    add ([
      sprite("dog-lady"),
      pos(width(),rand(0, height()-290)),
      scale(0.2),
      area(),
      move(180, 100),
      "enemy",
    ]);
  }
  loop(0.4, () => {
    createEnemy();
  })
  function omerWeapons() {
    const startPos = add ([
      sprite("cake4"),
      pos(300, height()/2),
      scale(0.06),
      area(),
      "weapon",
    ]);
  }
  omerWeapons();
  let dest = 145;
    action("weapon", (weapon) => {
    weapon.moveTo(dest, 480);
  })
  mouseClick(() => {
	dest = mousePos();
  });
  omer.collides("enemy", (e) => {
		destroy(e)
		destroy(omer)
		shake(40)
    wait(0.5, () => {
      go("death");
    });
  });
  collides("enemy", "weapon", (e,w) => {
		destroy(e);
    destroy(w);
    score.value += 1;
    score.text = "Score:" + score.value;
     if (score.value === 12) {
      squidMusic.pause(); 
      go("omer-walk-3");
    }
    dest = 145 ;
    omerWeapons();
    burp();
		}); 
})

scene("omer-walk-3", () => {
  const mjMusic = play("michael");
  const omer = add ([
  sprite("omer"),
  pos(-20,120),
  scale(0.5),
  area(),
  move(5, 80),
  ])
  wait(10, () => {
    mjMusic.pause();
    go("win");
  })
})

scene("win", () => {
  const winSong = play("lets-go");
  add ([ 
    sprite("sky"),
    scale(4),
  ])
  add ([
    text("THERE'S HOPE!", {size: 100}),
    pos(0,0),
    color(0,85,200),
    shake(40),
  ])
  add([
    sprite("liav&omer"),
    pos(150,150),
    scale(0.5),
  ])
  keyPress("space", () => {
    winSong.pause();
    burp();
    go("help-omer");
  });
})

scene("death", () => {
  const witchMusic = play("witch");
  add ([
    sprite("omer-zombies"),
    scale(1),
  ])
 add ([
    text("press space to try again", {size: 50}),
    pos(0,475),
    color(0,200,50),
  ])
  add ([
    text("WE'RE DOOMED", {size: 100}),
    pos(0,370),
    color(0,0,0),
])

  keyPress("space", () => {
    witchMusic.pause();
    burp();
    go("help-omer");
  });
});

go("help-omer");


