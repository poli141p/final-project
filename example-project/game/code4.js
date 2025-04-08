gdjs.main3Code = {};
gdjs.main3Code.localVariables = [];
gdjs.main3Code.GDCampfireObjects1= [];
gdjs.main3Code.GDCampfireObjects2= [];
gdjs.main3Code.GDGraveyardTilePlatformLeftObjects1= [];
gdjs.main3Code.GDGraveyardTilePlatformLeftObjects2= [];
gdjs.main3Code.GDGoldKeyObjects1= [];
gdjs.main3Code.GDGoldKeyObjects2= [];
gdjs.main3Code.GDDesertTilePlatformLeftObjects1= [];
gdjs.main3Code.GDDesertTilePlatformLeftObjects2= [];
gdjs.main3Code.GDDesertBackgroundObjects1= [];
gdjs.main3Code.GDDesertBackgroundObjects2= [];
gdjs.main3Code.GDCactusObjects1= [];
gdjs.main3Code.GDCactusObjects2= [];
gdjs.main3Code.GDDesertTileObjects1= [];
gdjs.main3Code.GDDesertTileObjects2= [];
gdjs.main3Code.GDForestBackgroundObjects1= [];
gdjs.main3Code.GDForestBackgroundObjects2= [];
gdjs.main3Code.GDscoreObjects1= [];
gdjs.main3Code.GDscoreObjects2= [];
gdjs.main3Code.GDDinoVitaObjects1= [];
gdjs.main3Code.GDDinoVitaObjects2= [];
gdjs.main3Code.GDFlatHeartBarObjects1= [];
gdjs.main3Code.GDFlatHeartBarObjects2= [];
gdjs.main3Code.GDTransparentDarkJoystickObjects1= [];
gdjs.main3Code.GDTransparentDarkJoystickObjects2= [];
gdjs.main3Code.GDGoldCoinObjects1= [];
gdjs.main3Code.GDGoldCoinObjects2= [];
gdjs.main3Code.GDUiHeartObjects1= [];
gdjs.main3Code.GDUiHeartObjects2= [];


gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main3Code.GDDinoVitaObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs.main3Code.GDGoldCoinObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main3Code.GDDinoVitaObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDCactusObjects1Objects = Hashtable.newFrom({"Cactus": gdjs.main3Code.GDCactusObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main3Code.GDDinoVitaObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDUiHeartObjects1Objects = Hashtable.newFrom({"UiHeart": gdjs.main3Code.GDUiHeartObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.main3Code.GDDinoVitaObjects1});
gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.main3Code.GDGoldKeyObjects1});
gdjs.main3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.main3Code.GDGoldCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDGoldCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDGoldCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.main3Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.main3Code.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins 8.aac", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main3Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDscoreObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus"), gdjs.main3Code.GDCactusObjects1);
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDCactusObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDDinoVitaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.main3Code.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].setPosition(145,418);
}
}{for(var i = 0, len = gdjs.main3Code.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDFlatHeartBarObjects1[i].SetValue(gdjs.main3Code.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.main3Code.GDDinoVitaObjects1.length !== 0 ? gdjs.main3Code.GDDinoVitaObjects1[0] : null), false, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.main3Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main3Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.main3Code.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main3Code.GDTransparentDarkJoystickObjects1[k] = gdjs.main3Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.main3Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.main3Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main3Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.main3Code.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main3Code.GDTransparentDarkJoystickObjects1[k] = gdjs.main3Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.main3Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main3Code.GDDinoVitaObjects1.length;i<l;++i) {
    if ( !(gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.main3Code.GDDinoVitaObjects1[k] = gdjs.main3Code.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.main3Code.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.main3Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main3Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.main3Code.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main3Code.GDTransparentDarkJoystickObjects1[k] = gdjs.main3Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.main3Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main3Code.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.main3Code.GDDinoVitaObjects1[k] = gdjs.main3Code.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.main3Code.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.main3Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ForestBackground"), gdjs.main3Code.GDForestBackgroundObjects1);
{for(var i = 0, len = gdjs.main3Code.GDForestBackgroundObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDForestBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.main3Code.GDFlatHeartBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main3Code.GDFlatHeartBarObjects1.length;i<l;++i) {
    if ( gdjs.main3Code.GDFlatHeartBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main3Code.GDFlatHeartBarObjects1[k] = gdjs.main3Code.GDFlatHeartBarObjects1[i];
        ++k;
    }
}
gdjs.main3Code.GDFlatHeartBarObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("UiHeart"), gdjs.main3Code.GDUiHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDUiHeartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.main3Code.GDFlatHeartBarObjects1);
/* Reuse gdjs.main3Code.GDUiHeartObjects1 */
{for(var i = 0, len = gdjs.main3Code.GDUiHeartObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDUiHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main3Code.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDFlatHeartBarObjects1[i].SetValue(gdjs.main3Code.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.main3Code.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.main3Code.GDGoldKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDDinoVitaObjects1Objects, gdjs.main3Code.mapOfGDgdjs_9546main3Code_9546GDGoldKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.main3Code.GDGoldKeyObjects1 */
{for(var i = 0, len = gdjs.main3Code.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.main3Code.GDGoldKeyObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.main3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main3Code.GDCampfireObjects1.length = 0;
gdjs.main3Code.GDCampfireObjects2.length = 0;
gdjs.main3Code.GDGraveyardTilePlatformLeftObjects1.length = 0;
gdjs.main3Code.GDGraveyardTilePlatformLeftObjects2.length = 0;
gdjs.main3Code.GDGoldKeyObjects1.length = 0;
gdjs.main3Code.GDGoldKeyObjects2.length = 0;
gdjs.main3Code.GDDesertTilePlatformLeftObjects1.length = 0;
gdjs.main3Code.GDDesertTilePlatformLeftObjects2.length = 0;
gdjs.main3Code.GDDesertBackgroundObjects1.length = 0;
gdjs.main3Code.GDDesertBackgroundObjects2.length = 0;
gdjs.main3Code.GDCactusObjects1.length = 0;
gdjs.main3Code.GDCactusObjects2.length = 0;
gdjs.main3Code.GDDesertTileObjects1.length = 0;
gdjs.main3Code.GDDesertTileObjects2.length = 0;
gdjs.main3Code.GDForestBackgroundObjects1.length = 0;
gdjs.main3Code.GDForestBackgroundObjects2.length = 0;
gdjs.main3Code.GDscoreObjects1.length = 0;
gdjs.main3Code.GDscoreObjects2.length = 0;
gdjs.main3Code.GDDinoVitaObjects1.length = 0;
gdjs.main3Code.GDDinoVitaObjects2.length = 0;
gdjs.main3Code.GDFlatHeartBarObjects1.length = 0;
gdjs.main3Code.GDFlatHeartBarObjects2.length = 0;
gdjs.main3Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.main3Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.main3Code.GDGoldCoinObjects1.length = 0;
gdjs.main3Code.GDGoldCoinObjects2.length = 0;
gdjs.main3Code.GDUiHeartObjects1.length = 0;
gdjs.main3Code.GDUiHeartObjects2.length = 0;

gdjs.main3Code.eventsList0(runtimeScene);
gdjs.main3Code.GDCampfireObjects1.length = 0;
gdjs.main3Code.GDCampfireObjects2.length = 0;
gdjs.main3Code.GDGraveyardTilePlatformLeftObjects1.length = 0;
gdjs.main3Code.GDGraveyardTilePlatformLeftObjects2.length = 0;
gdjs.main3Code.GDGoldKeyObjects1.length = 0;
gdjs.main3Code.GDGoldKeyObjects2.length = 0;
gdjs.main3Code.GDDesertTilePlatformLeftObjects1.length = 0;
gdjs.main3Code.GDDesertTilePlatformLeftObjects2.length = 0;
gdjs.main3Code.GDDesertBackgroundObjects1.length = 0;
gdjs.main3Code.GDDesertBackgroundObjects2.length = 0;
gdjs.main3Code.GDCactusObjects1.length = 0;
gdjs.main3Code.GDCactusObjects2.length = 0;
gdjs.main3Code.GDDesertTileObjects1.length = 0;
gdjs.main3Code.GDDesertTileObjects2.length = 0;
gdjs.main3Code.GDForestBackgroundObjects1.length = 0;
gdjs.main3Code.GDForestBackgroundObjects2.length = 0;
gdjs.main3Code.GDscoreObjects1.length = 0;
gdjs.main3Code.GDscoreObjects2.length = 0;
gdjs.main3Code.GDDinoVitaObjects1.length = 0;
gdjs.main3Code.GDDinoVitaObjects2.length = 0;
gdjs.main3Code.GDFlatHeartBarObjects1.length = 0;
gdjs.main3Code.GDFlatHeartBarObjects2.length = 0;
gdjs.main3Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.main3Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.main3Code.GDGoldCoinObjects1.length = 0;
gdjs.main3Code.GDGoldCoinObjects2.length = 0;
gdjs.main3Code.GDUiHeartObjects1.length = 0;
gdjs.main3Code.GDUiHeartObjects2.length = 0;


return;

}

gdjs['main3Code'] = gdjs.main3Code;
