import { EventEmitter } from 'events';

declare module 'JRIrSdk' {
  interface Options {
    telemetryUpdateInterval?: number;
    sessionInfoUpdateInterval?: number;
    sessionInfoParser?: (sessionInfoStr: string) => Object | null;
  }

  interface JsIrSdk {
    execCmd: (msgId: number, arg1?: number, arg2?: number, arg3?: number) => void;
    Consts: any; // Define the type of Consts if available
    camControls: {
      setState: (state: number) => void;
      switchToCar: (carNum: number | string, camGroupNum?: number, camNum?: number) => void;
      switchToPos: (position: number | string, camGroupNum?: number, camNum?: number) => void;
    };
    playbackControls: {
      play: () => void;
      pause: () => void;
      fastForward: (speed?: number) => void;
      rewind: (speed?: number) => void;
      slowForward: (divider?: number) => void;
      slowBackward: (divider?: number) => void;
      search: (searchMode: number | string) => void;
      searchTs: (sessionNum: number, sessionTimeMS: number) => void;
      searchFrame: (frameNum: number, rpyPosMode: number | string) => void;
    };
    reloadTextures: () => void;
    reloadTexture: (carIdx: number) => void;
    execChatCmd: (cmd: number | string, arg?: number) => void;
    execChatMacro: (num: number) => void;
    execPitCmd: (cmd: number | string, arg?: number) => void;
    execTelemetryCmd: (cmd: number | string) => void;
    telemetry: Object | null;
    telemetryDescription: Object | null;
    sessionInfo: Object | null;
    _stop: () => void;
  }

  class JRIrSdk extends EventEmitter {
    constructor(IrSdkWrapper: any, opts?: Options);
  }

  export = JRIrSdk;
}