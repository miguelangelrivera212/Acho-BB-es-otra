gdjs.El_32SaltoCode = {};
gdjs.El_32SaltoCode.localVariables = [];
gdjs.El_32SaltoCode.idToCallbackMap = new Map();
gdjs.El_32SaltoCode.GDFondo_9595el_9595saltoObjects1= [];
gdjs.El_32SaltoCode.GDFondo_9595el_9595saltoObjects2= [];
gdjs.El_32SaltoCode.GDCAnchaObjects1= [];
gdjs.El_32SaltoCode.GDCAnchaObjects2= [];
gdjs.El_32SaltoCode.GDCASA_9595RObjects1= [];
gdjs.El_32SaltoCode.GDCASA_9595RObjects2= [];
gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1= [];
gdjs.El_32SaltoCode.GDCartelDiscografiasObjects2= [];
gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1= [];
gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects2= [];


gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCASA_95959595RObjects1Objects = Hashtable.newFrom({"CASA_R": gdjs.El_32SaltoCode.GDCASA_9595RObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCASA_95959595RObjects1Objects = Hashtable.newFrom({"CASA_R": gdjs.El_32SaltoCode.GDCASA_9595RObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCAnchaObjects1Objects = Hashtable.newFrom({"CAncha": gdjs.El_32SaltoCode.GDCAnchaObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCAnchaObjects1Objects = Hashtable.newFrom({"CAncha": gdjs.El_32SaltoCode.GDCAnchaObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCASA_95959595RObjects1Objects = Hashtable.newFrom({"CASA_R": gdjs.El_32SaltoCode.GDCASA_9595RObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCartelDiscografiasObjects1Objects = Hashtable.newFrom({"CartelDiscografias": gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCartelDiscografiasObjects1Objects = Hashtable.newFrom({"CartelDiscografias": gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCartelDiscografiasObjects1Objects = Hashtable.newFrom({"CartelDiscografias": gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1});
gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCAnchaObjects1Objects = Hashtable.newFrom({"CAncha": gdjs.El_32SaltoCode.GDCAnchaObjects1});
gdjs.El_32SaltoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CASA_R"), gdjs.El_32SaltoCode.GDCASA_9595RObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCASA_95959595RObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32SaltoCode.GDCASA_9595RObjects1 */
{for(var i = 0, len = gdjs.El_32SaltoCode.GDCASA_9595RObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDCASA_9595RObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CASA_R"), gdjs.El_32SaltoCode.GDCASA_9595RObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCASA_95959595RObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32SaltoCode.GDCASA_9595RObjects1 */
{for(var i = 0, len = gdjs.El_32SaltoCode.GDCASA_9595RObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDCASA_9595RObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CAncha"), gdjs.El_32SaltoCode.GDCAnchaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCAnchaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32SaltoCode.GDCAnchaObjects1 */
{for(var i = 0, len = gdjs.El_32SaltoCode.GDCAnchaObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDCAnchaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CAncha"), gdjs.El_32SaltoCode.GDCAnchaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCAnchaObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32SaltoCode.GDCAnchaObjects1 */
{for(var i = 0, len = gdjs.El_32SaltoCode.GDCAnchaObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDCAnchaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CASA_R"), gdjs.El_32SaltoCode.GDCASA_9595RObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCASA_95959595RObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "casa R", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelDiscografias"), gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCartelDiscografiasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Panel_discografia"), gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1);
{for(var i = 0, len = gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelDiscografias"), gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCartelDiscografiasObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Panel_discografia"), gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1);
{for(var i = 0, len = gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1.length ;i < len;++i) {
    gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CartelDiscografias"), gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCartelDiscografiasObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("CAncha"), gdjs.El_32SaltoCode.GDCAnchaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.El_32SaltoCode.mapOfGDgdjs_9546El_959532SaltoCode_9546GDCAnchaObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cancha", false);
}
}

}


};

gdjs.El_32SaltoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.El_32SaltoCode.GDFondo_9595el_9595saltoObjects1.length = 0;
gdjs.El_32SaltoCode.GDFondo_9595el_9595saltoObjects2.length = 0;
gdjs.El_32SaltoCode.GDCAnchaObjects1.length = 0;
gdjs.El_32SaltoCode.GDCAnchaObjects2.length = 0;
gdjs.El_32SaltoCode.GDCASA_9595RObjects1.length = 0;
gdjs.El_32SaltoCode.GDCASA_9595RObjects2.length = 0;
gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1.length = 0;
gdjs.El_32SaltoCode.GDCartelDiscografiasObjects2.length = 0;
gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1.length = 0;
gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects2.length = 0;

gdjs.El_32SaltoCode.eventsList0(runtimeScene);
gdjs.El_32SaltoCode.GDFondo_9595el_9595saltoObjects1.length = 0;
gdjs.El_32SaltoCode.GDFondo_9595el_9595saltoObjects2.length = 0;
gdjs.El_32SaltoCode.GDCAnchaObjects1.length = 0;
gdjs.El_32SaltoCode.GDCAnchaObjects2.length = 0;
gdjs.El_32SaltoCode.GDCASA_9595RObjects1.length = 0;
gdjs.El_32SaltoCode.GDCASA_9595RObjects2.length = 0;
gdjs.El_32SaltoCode.GDCartelDiscografiasObjects1.length = 0;
gdjs.El_32SaltoCode.GDCartelDiscografiasObjects2.length = 0;
gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects1.length = 0;
gdjs.El_32SaltoCode.GDPanel_9595discografiaObjects2.length = 0;


return;

}

gdjs['El_32SaltoCode'] = gdjs.El_32SaltoCode;
