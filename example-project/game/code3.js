gdjs.main2Code = {};
gdjs.main2Code.localVariables = [];
gdjs.main2Code.GDDesertBackgroundObjects1= [];
gdjs.main2Code.GDDesertBackgroundObjects2= [];
gdjs.main2Code.GDDesertTileObjects1= [];
gdjs.main2Code.GDDesertTileObjects2= [];
gdjs.main2Code.GDCactusObjects1= [];
gdjs.main2Code.GDCactusObjects2= [];
gdjs.main2Code.GDDesertTilePlatformLeftObjects1= [];
gdjs.main2Code.GDDesertTilePlatformLeftObjects2= [];
gdjs.main2Code.GDDesertTilePlatformRightObjects1= [];
gdjs.main2Code.GDDesertTilePlatformRightObjects2= [];
gdjs.main2Code.GDForestBackgroundObjects1= [];
gdjs.main2Code.GDForestBackgroundObjects2= [];
gdjs.main2Code.GDscoreObjects1= [];
gdjs.main2Code.GDscoreObjects2= [];
gdjs.main2Code.GDDinoVitaObjects1= [];
gdjs.main2Code.GDDinoVitaObjects2= [];
gdjs.main2Code.GDFlatHeartBarObjects1= [];
gdjs.main2Code.GDFlatHeartBarObjects2= [];
gdjs.main2Code.GDTransparentDarkJoystickObjects1= [];
gdjs.main2Code.GDTransparentDarkJoystickObjects2= [];
gdjs.main2Code.GDGoldCoinObjects1= [];
gdjs.main2Code.GDGoldCoinObjects2= [];
gdjs.main2Code.GDUiHeartObjects1= [];
gdjs.main2Code.GDUiHeartObjects2= [];


gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main2Code.GDDinoVitaObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs.main2Code.GDGoldCoinObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main2Code.GDDinoVitaObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDCactusObjects1Objects = Hashtable.newFrom({"Cactus": gdjs.main2Code.GDCactusObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main2Code.GDDinoVitaObjects1});
gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDUiHeartObjects1Objects = Hashtable.newFrom({"UiHeart": gdjs.main2Code.GDUiHeartObjects1});
gdjs.main2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.main2Code.GDGoldCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDDinoVitaObjects1Objects, gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDGoldCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.main2Code.GDGoldCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.main2Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.main2Code.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins 8.aac", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main2Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDscoreObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus"), gdjs.main2Code.GDCactusObjects1);
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDDinoVitaObjects1Objects, gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDCactusObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.main2Code.GDDinoVitaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.main2Code.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].setPosition(145,418);
}
}{for(var i = 0, len = gdjs.main2Code.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDFlatHeartBarObjects1[i].SetValue(gdjs.main2Code.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.main2Code.GDDinoVitaObjects1.length !== 0 ? gdjs.main2Code.GDDinoVitaObjects1[0] : null), false, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.main2Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main2Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.main2Code.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main2Code.GDTransparentDarkJoystickObjects1[k] = gdjs.main2Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.main2Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.main2Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main2Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.main2Code.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main2Code.GDTransparentDarkJoystickObjects1[k] = gdjs.main2Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.main2Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.main2Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main2Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.main2Code.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main2Code.GDTransparentDarkJoystickObjects1[k] = gdjs.main2Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.main2Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main2Code.GDDinoVitaObjects1.length;i<l;++i) {
    if ( !(gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.main2Code.GDDinoVitaObjects1[k] = gdjs.main2Code.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.main2Code.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main2Code.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main2Code.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.main2Code.GDDinoVitaObjects1[k] = gdjs.main2Code.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.main2Code.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main2Code.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.main2Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ForestBackground"), gdjs.main2Code.GDForestBackgroundObjects1);
{for(var i = 0, len = gdjs.main2Code.GDForestBackgroundObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDForestBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.main2Code.GDFlatHeartBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main2Code.GDFlatHeartBarObjects1.length;i<l;++i) {
    if ( gdjs.main2Code.GDFlatHeartBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main2Code.GDFlatHeartBarObjects1[k] = gdjs.main2Code.GDFlatHeartBarObjects1[i];
        ++k;
    }
}
gdjs.main2Code.GDFlatHeartBarObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main2Code.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("UiHeart"), gdjs.main2Code.GDUiHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDDinoVitaObjects1Objects, gdjs.main2Code.mapOfGDgdjs_9546main2Code_9546GDUiHeartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.main2Code.GDFlatHeartBarObjects1);
/* Reuse gdjs.main2Code.GDUiHeartObjects1 */
{for(var i = 0, len = gdjs.main2Code.GDUiHeartObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDUiHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main2Code.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.main2Code.GDFlatHeartBarObjects1[i].SetValue(gdjs.main2Code.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.main2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main2Code.GDDesertBackgroundObjects1.length = 0;
gdjs.main2Code.GDDesertBackgroundObjects2.length = 0;
gdjs.main2Code.GDDesertTileObjects1.length = 0;
gdjs.main2Code.GDDesertTileObjects2.length = 0;
gdjs.main2Code.GDCactusObjects1.length = 0;
gdjs.main2Code.GDCactusObjects2.length = 0;
gdjs.main2Code.GDDesertTilePlatformLeftObjects1.length = 0;
gdjs.main2Code.GDDesertTilePlatformLeftObjects2.length = 0;
gdjs.main2Code.GDDesertTilePlatformRightObjects1.length = 0;
gdjs.main2Code.GDDesertTilePlatformRightObjects2.length = 0;
gdjs.main2Code.GDForestBackgroundObjects1.length = 0;
gdjs.main2Code.GDForestBackgroundObjects2.length = 0;
gdjs.main2Code.GDscoreObjects1.length = 0;
gdjs.main2Code.GDscoreObjects2.length = 0;
gdjs.main2Code.GDDinoVitaObjects1.length = 0;
gdjs.main2Code.GDDinoVitaObjects2.length = 0;
gdjs.main2Code.GDFlatHeartBarObjects1.length = 0;
gdjs.main2Code.GDFlatHeartBarObjects2.length = 0;
gdjs.main2Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.main2Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.main2Code.GDGoldCoinObjects1.length = 0;
gdjs.main2Code.GDGoldCoinObjects2.length = 0;
gdjs.main2Code.GDUiHeartObjects1.length = 0;
gdjs.main2Code.GDUiHeartObjects2.length = 0;

gdjs.main2Code.eventsList0(runtimeScene);
gdjs.main2Code.GDDesertBackgroundObjects1.length = 0;
gdjs.main2Code.GDDesertBackgroundObjects2.length = 0;
gdjs.main2Code.GDDesertTileObjects1.length = 0;
gdjs.main2Code.GDDesertTileObjects2.length = 0;
gdjs.main2Code.GDCactusObjects1.length = 0;
gdjs.main2Code.GDCactusObjects2.length = 0;
gdjs.main2Code.GDDesertTilePlatformLeftObjects1.length = 0;
gdjs.main2Code.GDDesertTilePlatformLeftObjects2.length = 0;
gdjs.main2Code.GDDesertTilePlatformRightObjects1.length = 0;
gdjs.main2Code.GDDesertTilePlatformRightObjects2.length = 0;
gdjs.main2Code.GDForestBackgroundObjects1.length = 0;
gdjs.main2Code.GDForestBackgroundObjects2.length = 0;
gdjs.main2Code.GDscoreObjects1.length = 0;
gdjs.main2Code.GDscoreObjects2.length = 0;
gdjs.main2Code.GDDinoVitaObjects1.length = 0;
gdjs.main2Code.GDDinoVitaObjects2.length = 0;
gdjs.main2Code.GDFlatHeartBarObjects1.length = 0;
gdjs.main2Code.GDFlatHeartBarObjects2.length = 0;
gdjs.main2Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.main2Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.main2Code.GDGoldCoinObjects1.length = 0;
gdjs.main2Code.GDGoldCoinObjects2.length = 0;
gdjs.main2Code.GDUiHeartObjects1.length = 0;
gdjs.main2Code.GDUiHeartObjects2.length = 0;


return;

}

gdjs['main2Code'] = gdjs.main2Code;
