gdjs.entrevistasCode = {};
gdjs.entrevistasCode.localVariables = [];
gdjs.entrevistasCode.idToCallbackMap = new Map();
gdjs.entrevistasCode.GDfondo_9595entrevistasObjects1= [];
gdjs.entrevistasCode.GDfondo_9595entrevistasObjects2= [];
gdjs.entrevistasCode.GDDiscoObjects1= [];
gdjs.entrevistasCode.GDDiscoObjects2= [];
gdjs.entrevistasCode.GDDisco2Objects1= [];
gdjs.entrevistasCode.GDDisco2Objects2= [];
gdjs.entrevistasCode.GDDisco3Objects1= [];
gdjs.entrevistasCode.GDDisco3Objects2= [];
gdjs.entrevistasCode.GDToca_9595discosObjects1= [];
gdjs.entrevistasCode.GDToca_9595discosObjects2= [];
gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects1= [];
gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects2= [];


gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.entrevistasCode.GDDiscoObjects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.entrevistasCode.GDDiscoObjects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.entrevistasCode.GDDiscoObjects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.entrevistasCode.GDDisco2Objects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.entrevistasCode.GDDisco2Objects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.entrevistasCode.GDDisco2Objects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.entrevistasCode.GDDisco3Objects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.entrevistasCode.GDDisco3Objects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.entrevistasCode.GDDisco3Objects1});
gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDBotonVolver_95959595EntrevistasObjects1Objects = Hashtable.newFrom({"BotonVolver_Entrevistas": gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects1});
gdjs.entrevistasCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.entrevistasCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.entrevistasCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.entrevistasCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.entrevistasCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.entrevistasCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDiscoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.entrevistasCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.entrevistasCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.entrevistasCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.entrevistasCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL(" https://www.youtube.com/watch?v=7kHUp8KNOfE", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.entrevistasCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.entrevistasCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.entrevistasCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.entrevistasCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.entrevistasCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.entrevistasCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.entrevistasCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.entrevistasCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.entrevistasCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtu.be/TEa8zdMQT9Q?si=D26kbYCoTMLvH-YB", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.entrevistasCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.entrevistasCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.entrevistasCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.entrevistasCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.entrevistasCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.entrevistasCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.entrevistasCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.entrevistasCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.entrevistasCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtu.be/l9dCHZdcEKo?si=NO9ue5gN7R1qEWpS", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver_Entrevistas"), gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.entrevistasCode.mapOfGDgdjs_9546entrevistasCode_9546GDBotonVolver_95959595EntrevistasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Discografias", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.entrevistasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.entrevistasCode.GDfondo_9595entrevistasObjects1.length = 0;
gdjs.entrevistasCode.GDfondo_9595entrevistasObjects2.length = 0;
gdjs.entrevistasCode.GDDiscoObjects1.length = 0;
gdjs.entrevistasCode.GDDiscoObjects2.length = 0;
gdjs.entrevistasCode.GDDisco2Objects1.length = 0;
gdjs.entrevistasCode.GDDisco2Objects2.length = 0;
gdjs.entrevistasCode.GDDisco3Objects1.length = 0;
gdjs.entrevistasCode.GDDisco3Objects2.length = 0;
gdjs.entrevistasCode.GDToca_9595discosObjects1.length = 0;
gdjs.entrevistasCode.GDToca_9595discosObjects2.length = 0;
gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects1.length = 0;
gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects2.length = 0;

gdjs.entrevistasCode.eventsList0(runtimeScene);
gdjs.entrevistasCode.GDfondo_9595entrevistasObjects1.length = 0;
gdjs.entrevistasCode.GDfondo_9595entrevistasObjects2.length = 0;
gdjs.entrevistasCode.GDDiscoObjects1.length = 0;
gdjs.entrevistasCode.GDDiscoObjects2.length = 0;
gdjs.entrevistasCode.GDDisco2Objects1.length = 0;
gdjs.entrevistasCode.GDDisco2Objects2.length = 0;
gdjs.entrevistasCode.GDDisco3Objects1.length = 0;
gdjs.entrevistasCode.GDDisco3Objects2.length = 0;
gdjs.entrevistasCode.GDToca_9595discosObjects1.length = 0;
gdjs.entrevistasCode.GDToca_9595discosObjects2.length = 0;
gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects1.length = 0;
gdjs.entrevistasCode.GDBotonVolver_9595EntrevistasObjects2.length = 0;


return;

}

gdjs['entrevistasCode'] = gdjs.entrevistasCode;
