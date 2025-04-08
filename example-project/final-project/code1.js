gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDGraveyardTileObjects1= [];
gdjs.mainCode.GDGraveyardTileObjects2= [];
gdjs.mainCode.GDCampfireObjects1= [];
gdjs.mainCode.GDCampfireObjects2= [];
gdjs.mainCode.GDGraveyardTilePlatformLeftObjects1= [];
gdjs.mainCode.GDGraveyardTilePlatformLeftObjects2= [];
gdjs.mainCode.GDGoldKeyObjects1= [];
gdjs.mainCode.GDGoldKeyObjects2= [];
gdjs.mainCode.GDForestBackgroundObjects1= [];
gdjs.mainCode.GDForestBackgroundObjects2= [];
gdjs.mainCode.GDscoreObjects1= [];
gdjs.mainCode.GDscoreObjects2= [];
gdjs.mainCode.GDDinoVitaObjects1= [];
gdjs.mainCode.GDDinoVitaObjects2= [];
gdjs.mainCode.GDFlatHeartBarObjects1= [];
gdjs.mainCode.GDFlatHeartBarObjects2= [];
gdjs.mainCode.GDTransparentDarkJoystickObjects1= [];
gdjs.mainCode.GDTransparentDarkJoystickObjects2= [];
gdjs.mainCode.GDGoldCoinObjects1= [];
gdjs.mainCode.GDGoldCoinObjects2= [];
gdjs.mainCode.GDUiHeartObjects1= [];
gdjs.mainCode.GDUiHeartObjects2= [];


gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.mainCode.GDDinoVitaObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs.mainCode.GDGoldCoinObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.mainCode.GDDinoVitaObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDCampfireObjects1Objects = Hashtable.newFrom({"Campfire": gdjs.mainCode.GDCampfireObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.mainCode.GDDinoVitaObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDUiHeartObjects1Objects = Hashtable.newFrom({"UiHeart": gdjs.mainCode.GDUiHeartObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.mainCode.GDDinoVitaObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.mainCode.GDGoldKeyObjects1});
gdjs.mainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.mainCode.GDGoldCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDGoldCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDGoldCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.mainCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.mainCode.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins 8.aac", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.mainCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDscoreObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campfire"), gdjs.mainCode.GDCampfireObjects1);
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDCampfireObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDDinoVitaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.mainCode.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].setPosition(145,418);
}
}{for(var i = 0, len = gdjs.mainCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.mainCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mainCode.GDDinoVitaObjects1.length !== 0 ? gdjs.mainCode.GDDinoVitaObjects1[0] : null), false, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.mainCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDTransparentDarkJoystickObjects1[k] = gdjs.mainCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.mainCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDTransparentDarkJoystickObjects1[k] = gdjs.mainCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( !(gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDDinoVitaObjects1[k] = gdjs.mainCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.mainCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDTransparentDarkJoystickObjects1[k] = gdjs.mainCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDDinoVitaObjects1[k] = gdjs.mainCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Kick");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ForestBackground"), gdjs.mainCode.GDForestBackgroundObjects1);
{for(var i = 0, len = gdjs.mainCode.GDForestBackgroundObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDForestBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.mainCode.GDFlatHeartBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDFlatHeartBarObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDFlatHeartBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDFlatHeartBarObjects1[k] = gdjs.mainCode.GDFlatHeartBarObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDFlatHeartBarObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("UiHeart"), gdjs.mainCode.GDUiHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDUiHeartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.mainCode.GDFlatHeartBarObjects1);
/* Reuse gdjs.mainCode.GDUiHeartObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDUiHeartObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDUiHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mainCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.mainCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.mainCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.mainCode.GDGoldKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDDinoVitaObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDGoldKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDGoldKeyObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDGoldKeyObjects1[i].deleteFromScene(runtimeScene);
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

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDGraveyardTileObjects1.length = 0;
gdjs.mainCode.GDGraveyardTileObjects2.length = 0;
gdjs.mainCode.GDCampfireObjects1.length = 0;
gdjs.mainCode.GDCampfireObjects2.length = 0;
gdjs.mainCode.GDGraveyardTilePlatformLeftObjects1.length = 0;
gdjs.mainCode.GDGraveyardTilePlatformLeftObjects2.length = 0;
gdjs.mainCode.GDGoldKeyObjects1.length = 0;
gdjs.mainCode.GDGoldKeyObjects2.length = 0;
gdjs.mainCode.GDForestBackgroundObjects1.length = 0;
gdjs.mainCode.GDForestBackgroundObjects2.length = 0;
gdjs.mainCode.GDscoreObjects1.length = 0;
gdjs.mainCode.GDscoreObjects2.length = 0;
gdjs.mainCode.GDDinoVitaObjects1.length = 0;
gdjs.mainCode.GDDinoVitaObjects2.length = 0;
gdjs.mainCode.GDFlatHeartBarObjects1.length = 0;
gdjs.mainCode.GDFlatHeartBarObjects2.length = 0;
gdjs.mainCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.mainCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.mainCode.GDGoldCoinObjects1.length = 0;
gdjs.mainCode.GDGoldCoinObjects2.length = 0;
gdjs.mainCode.GDUiHeartObjects1.length = 0;
gdjs.mainCode.GDUiHeartObjects2.length = 0;

gdjs.mainCode.eventsList0(runtimeScene);
gdjs.mainCode.GDGraveyardTileObjects1.length = 0;
gdjs.mainCode.GDGraveyardTileObjects2.length = 0;
gdjs.mainCode.GDCampfireObjects1.length = 0;
gdjs.mainCode.GDCampfireObjects2.length = 0;
gdjs.mainCode.GDGraveyardTilePlatformLeftObjects1.length = 0;
gdjs.mainCode.GDGraveyardTilePlatformLeftObjects2.length = 0;
gdjs.mainCode.GDGoldKeyObjects1.length = 0;
gdjs.mainCode.GDGoldKeyObjects2.length = 0;
gdjs.mainCode.GDForestBackgroundObjects1.length = 0;
gdjs.mainCode.GDForestBackgroundObjects2.length = 0;
gdjs.mainCode.GDscoreObjects1.length = 0;
gdjs.mainCode.GDscoreObjects2.length = 0;
gdjs.mainCode.GDDinoVitaObjects1.length = 0;
gdjs.mainCode.GDDinoVitaObjects2.length = 0;
gdjs.mainCode.GDFlatHeartBarObjects1.length = 0;
gdjs.mainCode.GDFlatHeartBarObjects2.length = 0;
gdjs.mainCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.mainCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.mainCode.GDGoldCoinObjects1.length = 0;
gdjs.mainCode.GDGoldCoinObjects2.length = 0;
gdjs.mainCode.GDUiHeartObjects1.length = 0;
gdjs.mainCode.GDUiHeartObjects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
