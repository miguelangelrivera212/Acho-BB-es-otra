gdjs.InicioCode = {};
gdjs.InicioCode.localVariables = [];
gdjs.InicioCode.idToCallbackMap = new Map();
gdjs.InicioCode.GDFondo_9595InicioObjects1= [];
gdjs.InicioCode.GDFondo_9595InicioObjects2= [];
gdjs.InicioCode.GDTitulo_9595principalObjects1= [];
gdjs.InicioCode.GDTitulo_9595principalObjects2= [];
gdjs.InicioCode.GDTXT_9595IntroObjects1= [];
gdjs.InicioCode.GDTXT_9595IntroObjects2= [];
gdjs.InicioCode.GDCaja_9595DialogoObjects1= [];
gdjs.InicioCode.GDCaja_9595DialogoObjects2= [];
gdjs.InicioCode.GDTXT_9595IntroduccionObjects1= [];
gdjs.InicioCode.GDTXT_9595IntroduccionObjects2= [];
gdjs.InicioCode.GDLogo_9595principalObjects1= [];
gdjs.InicioCode.GDLogo_9595principalObjects2= [];
gdjs.InicioCode.GDBTN_9595Iniciar2Objects1= [];
gdjs.InicioCode.GDBTN_9595Iniciar2Objects2= [];


gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBTN_95959595Iniciar2Objects1Objects = Hashtable.newFrom({"BTN_Iniciar2": gdjs.InicioCode.GDBTN_9595Iniciar2Objects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBTN_95959595Iniciar2Objects1Objects = Hashtable.newFrom({"BTN_Iniciar2": gdjs.InicioCode.GDBTN_9595Iniciar2Objects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBTN_95959595Iniciar2Objects1Objects = Hashtable.newFrom({"BTN_Iniciar2": gdjs.InicioCode.GDBTN_9595Iniciar2Objects1});
gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BTN_Iniciar2"), gdjs.InicioCode.GDBTN_9595Iniciar2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBTN_95959595Iniciar2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa_Principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Iniciar2"), gdjs.InicioCode.GDBTN_9595Iniciar2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBTN_95959595Iniciar2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.InicioCode.GDBTN_9595Iniciar2Objects1 */
{for(var i = 0, len = gdjs.InicioCode.GDBTN_9595Iniciar2Objects1.length ;i < len;++i) {
    gdjs.InicioCode.GDBTN_9595Iniciar2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Iniciar2"), gdjs.InicioCode.GDBTN_9595Iniciar2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDBTN_95959595Iniciar2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InicioCode.GDBTN_9595Iniciar2Objects1 */
{for(var i = 0, len = gdjs.InicioCode.GDBTN_9595Iniciar2Objects1.length ;i < len;++i) {
    gdjs.InicioCode.GDBTN_9595Iniciar2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDFondo_9595InicioObjects1.length = 0;
gdjs.InicioCode.GDFondo_9595InicioObjects2.length = 0;
gdjs.InicioCode.GDTitulo_9595principalObjects1.length = 0;
gdjs.InicioCode.GDTitulo_9595principalObjects2.length = 0;
gdjs.InicioCode.GDTXT_9595IntroObjects1.length = 0;
gdjs.InicioCode.GDTXT_9595IntroObjects2.length = 0;
gdjs.InicioCode.GDCaja_9595DialogoObjects1.length = 0;
gdjs.InicioCode.GDCaja_9595DialogoObjects2.length = 0;
gdjs.InicioCode.GDTXT_9595IntroduccionObjects1.length = 0;
gdjs.InicioCode.GDTXT_9595IntroduccionObjects2.length = 0;
gdjs.InicioCode.GDLogo_9595principalObjects1.length = 0;
gdjs.InicioCode.GDLogo_9595principalObjects2.length = 0;
gdjs.InicioCode.GDBTN_9595Iniciar2Objects1.length = 0;
gdjs.InicioCode.GDBTN_9595Iniciar2Objects2.length = 0;

gdjs.InicioCode.eventsList0(runtimeScene);
gdjs.InicioCode.GDFondo_9595InicioObjects1.length = 0;
gdjs.InicioCode.GDFondo_9595InicioObjects2.length = 0;
gdjs.InicioCode.GDTitulo_9595principalObjects1.length = 0;
gdjs.InicioCode.GDTitulo_9595principalObjects2.length = 0;
gdjs.InicioCode.GDTXT_9595IntroObjects1.length = 0;
gdjs.InicioCode.GDTXT_9595IntroObjects2.length = 0;
gdjs.InicioCode.GDCaja_9595DialogoObjects1.length = 0;
gdjs.InicioCode.GDCaja_9595DialogoObjects2.length = 0;
gdjs.InicioCode.GDTXT_9595IntroduccionObjects1.length = 0;
gdjs.InicioCode.GDTXT_9595IntroduccionObjects2.length = 0;
gdjs.InicioCode.GDLogo_9595principalObjects1.length = 0;
gdjs.InicioCode.GDLogo_9595principalObjects2.length = 0;
gdjs.InicioCode.GDBTN_9595Iniciar2Objects1.length = 0;
gdjs.InicioCode.GDBTN_9595Iniciar2Objects2.length = 0;


return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
