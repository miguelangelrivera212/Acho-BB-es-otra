gdjs.Nadie_32sabeCode = {};
gdjs.Nadie_32sabeCode.localVariables = [];
gdjs.Nadie_32sabeCode.idToCallbackMap = new Map();
gdjs.Nadie_32sabeCode.GDNadie_9595sabeObjects1= [];
gdjs.Nadie_32sabeCode.GDNadie_9595sabeObjects2= [];
gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects1= [];
gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects2= [];
gdjs.Nadie_32sabeCode.GDDiscoObjects1= [];
gdjs.Nadie_32sabeCode.GDDiscoObjects2= [];
gdjs.Nadie_32sabeCode.GDDisco2Objects1= [];
gdjs.Nadie_32sabeCode.GDDisco2Objects2= [];
gdjs.Nadie_32sabeCode.GDDisco3Objects1= [];
gdjs.Nadie_32sabeCode.GDDisco3Objects2= [];
gdjs.Nadie_32sabeCode.GDToca_9595discosObjects1= [];
gdjs.Nadie_32sabeCode.GDToca_9595discosObjects2= [];


gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.Nadie_32sabeCode.GDDiscoObjects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.Nadie_32sabeCode.GDDiscoObjects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDiscoObjects1Objects = Hashtable.newFrom({"Disco": gdjs.Nadie_32sabeCode.GDDiscoObjects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.Nadie_32sabeCode.GDDisco2Objects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.Nadie_32sabeCode.GDDisco2Objects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco2Objects1Objects = Hashtable.newFrom({"Disco2": gdjs.Nadie_32sabeCode.GDDisco2Objects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.Nadie_32sabeCode.GDDisco3Objects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.Nadie_32sabeCode.GDDisco3Objects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco3Objects1Objects = Hashtable.newFrom({"Disco3": gdjs.Nadie_32sabeCode.GDDisco3Objects1});
gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDBotonVolver_95959595NSLVPMObjects1Objects = Hashtable.newFrom({"BotonVolver_NSLVPM": gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects1});
gdjs.Nadie_32sabeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.Nadie_32sabeCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nadie_32sabeCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.Nadie_32sabeCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.Nadie_32sabeCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.Nadie_32sabeCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDiscoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Nadie_32sabeCode.GDDiscoObjects1 */
{for(var i = 0, len = gdjs.Nadie_32sabeCode.GDDiscoObjects1.length ;i < len;++i) {
    gdjs.Nadie_32sabeCode.GDDiscoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco"), gdjs.Nadie_32sabeCode.GDDiscoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDiscoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=qWL7Iy7jhKc&list=OLAK5uy_nTxvJMompJ4OuH-oTk56S63_w7ez-ZhPs", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.Nadie_32sabeCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Nadie_32sabeCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.Nadie_32sabeCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.Nadie_32sabeCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.Nadie_32sabeCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nadie_32sabeCode.GDDisco2Objects1 */
{for(var i = 0, len = gdjs.Nadie_32sabeCode.GDDisco2Objects1.length ;i < len;++i) {
    gdjs.Nadie_32sabeCode.GDDisco2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco2"), gdjs.Nadie_32sabeCode.GDDisco2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=_PJvpq8uOZM&list=OLAK5uy_nTxvJMompJ4OuH-oTk56S63_w7ez-ZhPs&index=2", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.Nadie_32sabeCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nadie_32sabeCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.Nadie_32sabeCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.Nadie_32sabeCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.Nadie_32sabeCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Nadie_32sabeCode.GDDisco3Objects1 */
{for(var i = 0, len = gdjs.Nadie_32sabeCode.GDDisco3Objects1.length ;i < len;++i) {
    gdjs.Nadie_32sabeCode.GDDisco3Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disco3"), gdjs.Nadie_32sabeCode.GDDisco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDDisco3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=Q5GswxdmfPI&list=OLAK5uy_nTxvJMompJ4OuH-oTk56S63_w7ez-ZhPs&index=5", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonVolver_NSLVPM"), gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nadie_32sabeCode.mapOfGDgdjs_9546Nadie_959532sabeCode_9546GDBotonVolver_95959595NSLVPMObjects1Objects, runtimeScene, true, false);
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

gdjs.Nadie_32sabeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nadie_32sabeCode.GDNadie_9595sabeObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDNadie_9595sabeObjects2.length = 0;
gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects2.length = 0;
gdjs.Nadie_32sabeCode.GDDiscoObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDDiscoObjects2.length = 0;
gdjs.Nadie_32sabeCode.GDDisco2Objects1.length = 0;
gdjs.Nadie_32sabeCode.GDDisco2Objects2.length = 0;
gdjs.Nadie_32sabeCode.GDDisco3Objects1.length = 0;
gdjs.Nadie_32sabeCode.GDDisco3Objects2.length = 0;
gdjs.Nadie_32sabeCode.GDToca_9595discosObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDToca_9595discosObjects2.length = 0;

gdjs.Nadie_32sabeCode.eventsList0(runtimeScene);
gdjs.Nadie_32sabeCode.GDNadie_9595sabeObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDNadie_9595sabeObjects2.length = 0;
gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDBotonVolver_9595NSLVPMObjects2.length = 0;
gdjs.Nadie_32sabeCode.GDDiscoObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDDiscoObjects2.length = 0;
gdjs.Nadie_32sabeCode.GDDisco2Objects1.length = 0;
gdjs.Nadie_32sabeCode.GDDisco2Objects2.length = 0;
gdjs.Nadie_32sabeCode.GDDisco3Objects1.length = 0;
gdjs.Nadie_32sabeCode.GDDisco3Objects2.length = 0;
gdjs.Nadie_32sabeCode.GDToca_9595discosObjects1.length = 0;
gdjs.Nadie_32sabeCode.GDToca_9595discosObjects2.length = 0;


return;

}

gdjs['Nadie_32sabeCode'] = gdjs.Nadie_32sabeCode;
