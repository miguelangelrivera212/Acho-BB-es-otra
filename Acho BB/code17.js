gdjs.X100preCode = {};
gdjs.X100preCode.localVariables = [];
gdjs.X100preCode.idToCallbackMap = new Map();
gdjs.X100preCode.GDFondo_9595x100preObjects1= [];
gdjs.X100preCode.GDFondo_9595x100preObjects2= [];
gdjs.X100preCode.GDBotonVolver_9595x100preObjects1= [];
gdjs.X100preCode.GDBotonVolver_9595x100preObjects2= [];
gdjs.X100preCode.GDDiscoObjects1= [];
gdjs.X100preCode.GDDiscoObjects2= [];
gdjs.X100preCode.GDDisco2Objects1= [];
gdjs.X100preCode.GDDisco2Objects2= [];
gdjs.X100preCode.GDDisco3Objects1= [];
gdjs.X100preCode.GDDisco3Objects2= [];
gdjs.X100preCode.GDToca_9595discosObjects1= [];
gdjs.X100preCode.GDToca_9595discosObjects2= [];


gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.X100preCode.GDDiscoObjects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.X100preCode.GDDiscoObjects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.X100preCode.GDDiscoObjects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.X100preCode.GDDisco2Objects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.X100preCode.GDDisco2Objects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.X100preCode.GDDisco2Objects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.X100preCode.GDDisco3Objects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.X100preCode.GDDisco3Objects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.X100preCode.GDDisco3Objects1});
gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDBotonVolver_95959595x100preObjects1Objects = Hashtable.newFrom({"BotonVolver_x100pre": gdjs.X100preCode.GDBotonVolver_9595x100preObjects1});
gdjs.X100preCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.X100preCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.X100preCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.X100preCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.X100preCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.X100preCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDiscoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.X100preCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.X100preCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.X100preCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.X100preCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=TlFlP2BQmew&list=PLzoUNPFg0yEONgIwPf4W5HKRZHRJLST0m", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.X100preCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.X100preCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.X100preCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.X100preCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.X100preCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.X100preCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.X100preCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.X100preCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.X100preCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=COu41-YmryQ&list=PLzoUNPFg0yEONgIwPf4W5HKRZHRJLST0m&index=2", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.X100preCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.X100preCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.X100preCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.X100preCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.X100preCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.X100preCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.X100preCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.X100preCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.X100preCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=Fp22B_1Mct8&list=PLzoUNPFg0yEONgIwPf4W5HKRZHRJLST0m&index=5", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver_x100pre"), gdjs.X100preCode.GDBotonVolver_9595x100preObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.X100preCode.mapOfGDgdjs_9546X100preCode_9546GDBotonVolver_95959595x100preObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Discografias", false);
}
}

}


};

gdjs.X100preCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.X100preCode.GDFondo_9595x100preObjects1.length = 0;
gdjs.X100preCode.GDFondo_9595x100preObjects2.length = 0;
gdjs.X100preCode.GDBotonVolver_9595x100preObjects1.length = 0;
gdjs.X100preCode.GDBotonVolver_9595x100preObjects2.length = 0;
gdjs.X100preCode.GDDiscoObjects1.length = 0;
gdjs.X100preCode.GDDiscoObjects2.length = 0;
gdjs.X100preCode.GDDisco2Objects1.length = 0;
gdjs.X100preCode.GDDisco2Objects2.length = 0;
gdjs.X100preCode.GDDisco3Objects1.length = 0;
gdjs.X100preCode.GDDisco3Objects2.length = 0;
gdjs.X100preCode.GDToca_9595discosObjects1.length = 0;
gdjs.X100preCode.GDToca_9595discosObjects2.length = 0;

gdjs.X100preCode.eventsList0(runtimeScene);
gdjs.X100preCode.GDFondo_9595x100preObjects1.length = 0;
gdjs.X100preCode.GDFondo_9595x100preObjects2.length = 0;
gdjs.X100preCode.GDBotonVolver_9595x100preObjects1.length = 0;
gdjs.X100preCode.GDBotonVolver_9595x100preObjects2.length = 0;
gdjs.X100preCode.GDDiscoObjects1.length = 0;
gdjs.X100preCode.GDDiscoObjects2.length = 0;
gdjs.X100preCode.GDDisco2Objects1.length = 0;
gdjs.X100preCode.GDDisco2Objects2.length = 0;
gdjs.X100preCode.GDDisco3Objects1.length = 0;
gdjs.X100preCode.GDDisco3Objects2.length = 0;
gdjs.X100preCode.GDToca_9595discosObjects1.length = 0;
gdjs.X100preCode.GDToca_9595discosObjects2.length = 0;


return;

}

gdjs['X100preCode'] = gdjs.X100preCode;
