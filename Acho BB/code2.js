gdjs.Vida_32del_32artistaCode = {};
gdjs.Vida_32del_32artistaCode.localVariables = [];
gdjs.Vida_32del_32artistaCode.idToCallbackMap = new Map();
gdjs.Vida_32del_32artistaCode.GDFondo_9595_9595Vida_9595del_9595aObjects1= [];
gdjs.Vida_32del_32artistaCode.GDFondo_9595_9595Vida_9595del_9595aObjects2= [];
gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1= [];
gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects2= [];
gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1= [];
gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects2= [];
gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1= [];
gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects2= [];
gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects1= [];
gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects2= [];
gdjs.Vida_32del_32artistaCode.GDbenito_9595vidaObjects1= [];
gdjs.Vida_32del_32artistaCode.GDbenito_9595vidaObjects2= [];


gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelAntesBenitoObjects1Objects = Hashtable.newFrom({"CartelAntesBenito": gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelAntesBenitoObjects1Objects = Hashtable.newFrom({"CartelAntesBenito": gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelBoomObjects1Objects = Hashtable.newFrom({"CartelBoom": gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelBoomObjects1Objects = Hashtable.newFrom({"CartelBoom": gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelElSaltoObjects1Objects = Hashtable.newFrom({"CartelElSalto": gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelElSaltoObjects1Objects = Hashtable.newFrom({"CartelElSalto": gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDBotonVolver_959595952Objects1Objects = Hashtable.newFrom({"BotonVolver_2": gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelAntesBenitoObjects1Objects = Hashtable.newFrom({"CartelAntesBenito": gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelBoomObjects1Objects = Hashtable.newFrom({"CartelBoom": gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1});
gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelElSaltoObjects1Objects = Hashtable.newFrom({"CartelElSalto": gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1});
gdjs.Vida_32del_32artistaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CartelAntesBenito"), gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartelBoom"), gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1);
gdjs.copyArray(runtimeScene.getObjects("CartelElSalto"), gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1);
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelAntesBenito"), gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelAntesBenitoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1 */
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelAntesBenito"), gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelAntesBenitoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1 */
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelBoom"), gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelBoomObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1 */
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelBoom"), gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelBoomObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1 */
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelElSalto"), gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelElSaltoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1 */
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelElSalto"), gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelElSaltoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1 */
{for(var i = 0, len = gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1.length ;i < len;++i) {
    gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver_2"), gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDBotonVolver_959595952Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa_Principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelAntesBenito"), gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelAntesBenitoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Antes de Benito", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelBoom"), gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelBoomObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BOOM", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelElSalto"), gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Vida_32del_32artistaCode.mapOfGDgdjs_9546Vida_959532del_959532artistaCode_9546GDCartelElSaltoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "El Salto", false);
}
}

}


};

gdjs.Vida_32del_32artistaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Vida_32del_32artistaCode.GDFondo_9595_9595Vida_9595del_9595aObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDFondo_9595_9595Vida_9595del_9595aObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDbenito_9595vidaObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDbenito_9595vidaObjects2.length = 0;

gdjs.Vida_32del_32artistaCode.eventsList0(runtimeScene);
gdjs.Vida_32del_32artistaCode.GDFondo_9595_9595Vida_9595del_9595aObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDFondo_9595_9595Vida_9595del_9595aObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelAntesBenitoObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelBoomObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDCartelElSaltoObjects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDBotonVolver_95952Objects2.length = 0;
gdjs.Vida_32del_32artistaCode.GDbenito_9595vidaObjects1.length = 0;
gdjs.Vida_32del_32artistaCode.GDbenito_9595vidaObjects2.length = 0;


return;

}

gdjs['Vida_32del_32artistaCode'] = gdjs.Vida_32del_32artistaCode;
