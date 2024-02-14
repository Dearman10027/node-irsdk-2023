declare module 'irsdkNodeWrapper-stub' {
    interface IrSdkNodeWrapperStub {
      start: () => boolean;
      shutdown: () => void;
      isInitialized: () => boolean;
      isConnected: () => boolean;
      updateSessionInfo: () => boolean;
      getSessionInfo: () => any; // Define the return type of getSessionInfo if known
      updateTelemetry: () => boolean;
      getTelemetryDescription: () => Object;
      getTelemetry: () => Object;
      sendCmd: (...args: any[]) => void;
    }
  
    const mock: IrSdkNodeWrapperStub;
  
    export = mock;
  }