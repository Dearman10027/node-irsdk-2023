import JsIrSdk from "./JsIrSdk";
declare module 'node-irsdk-2023' {
    interface Options {
      telemetryUpdateInterval?: number;
      sessionInfoUpdateInterval?: number;
      sessionInfoParser?: any; // Define the type of sessionInfoParser accordingly
    }
  
    
  
    function init(opts?: Options): JsIrSdk;
  
    function getInstance(): JsIrSdk;
  
    export { init, getInstance };
  }