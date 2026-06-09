gdjs.El_32ultimo_32tourCode = {};
gdjs.El_32ultimo_32tourCode.localVariables = [];
gdjs.El_32ultimo_32tourCode.idToCallbackMap = new Map();
gdjs.El_32ultimo_32tourCode.GDFondo_9595el_9595ultimo_9595tourObjects1= [];
gdjs.El_32ultimo_32tourCode.GDFondo_9595el_9595ultimo_9595tourObjects2= [];
gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects1= [];
gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects2= [];
gdjs.El_32ultimo_32tourCode.GDDiscoObjects1= [];
gdjs.El_32ultimo_32tourCode.GDDiscoObjects2= [];
gdjs.El_32ultimo_32tourCode.GDDisco2Objects1= [];
gdjs.El_32ultimo_32tourCode.GDDisco2Objects2= [];
gdjs.El_32ultimo_32tourCode.GDDisco3Objects1= [];
gdjs.El_32ultimo_32tourCode.GDDisco3Objects2= [];
gdjs.El_32ultimo_32tourCode.GDToca_9595discosObjects1= [];
gdjs.El_32ultimo_32tourCode.GDToca_9595discosObjects2= [];


gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.El_32ultimo_32tourCode.GDDiscoObjects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.El_32ultimo_32tourCode.GDDiscoObjects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.El_32ultimo_32tourCode.GDDiscoObjects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.El_32ultimo_32tourCode.GDDisco2Objects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.El_32ultimo_32tourCode.GDDisco2Objects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.El_32ultimo_32tourCode.GDDisco2Objects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.El_32ultimo_32tourCode.GDDisco3Objects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.El_32ultimo_32tourCode.GDDisco3Objects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.El_32ultimo_32tourCode.GDDisco3Objects1});
gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDBotonVolver_95959595EUTObjects1Objects = Hashtable.newFrom({"BotonVolver_EUT": gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects1});
gdjs.El_32ultimo_32tourCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.El_32ultimo_32tourCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32ultimo_32tourCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.El_32ultimo_32tourCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.El_32ultimo_32tourCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.El_32ultimo_32tourCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDiscoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32ultimo_32tourCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.El_32ultimo_32tourCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.El_32ultimo_32tourCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.El_32ultimo_32tourCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=0jmAwrqNudw&list=PLSBWvYm8t6uZ_GJGAhqdy4KBiPJSH9pNd&index=6", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.El_32ultimo_32tourCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32ultimo_32tourCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.El_32ultimo_32tourCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.El_32ultimo_32tourCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.El_32ultimo_32tourCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32ultimo_32tourCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.El_32ultimo_32tourCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.El_32ultimo_32tourCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.El_32ultimo_32tourCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=2x9aY0QJR04&list=PLSBWvYm8t6uZ_GJGAhqdy4KBiPJSH9pNd&index=12", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.El_32ultimo_32tourCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32ultimo_32tourCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.El_32ultimo_32tourCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.El_32ultimo_32tourCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.El_32ultimo_32tourCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32ultimo_32tourCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.El_32ultimo_32tourCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.El_32ultimo_32tourCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.El_32ultimo_32tourCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=dbR28mrGQIo&list=PLSBWvYm8t6uZ_GJGAhqdy4KBiPJSH9pNd&index=16", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver_EUT"), gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32ultimo_32tourCode.mapOfGDgdjs_9546El_959532ultimo_959532tourCode_9546GDBotonVolver_95959595EUTObjects1Objects, runtimeScene, true, false);
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

gdjs.El_32ultimo_32tourCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.El_32ultimo_32tourCode.GDFondo_9595el_9595ultimo_9595tourObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDFondo_9595el_9595ultimo_9595tourObjects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDDiscoObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDDiscoObjects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco2Objects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco2Objects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco3Objects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco3Objects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDToca_9595discosObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDToca_9595discosObjects2.length = 0;

gdjs.El_32ultimo_32tourCode.eventsList0(runtimeScene);
gdjs.El_32ultimo_32tourCode.GDFondo_9595el_9595ultimo_9595tourObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDFondo_9595el_9595ultimo_9595tourObjects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDBotonVolver_9595EUTObjects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDDiscoObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDDiscoObjects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco2Objects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco2Objects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco3Objects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDDisco3Objects2.length = 0;
gdjs.El_32ultimo_32tourCode.GDToca_9595discosObjects1.length = 0;
gdjs.El_32ultimo_32tourCode.GDToca_9595discosObjects2.length = 0;


return;

}

gdjs['El_32ultimo_32tourCode'] = gdjs.El_32ultimo_32tourCode;
