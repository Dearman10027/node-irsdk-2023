declare module 'IrSdkConsts' {
    export const BroadcastMsg: {
      CamSwitchPos: number;
      CamSwitchNum: number;
      CamSetState: number;
      ReplaySetPlaySpeed: number;
      ReplaySetPlayPosition: number;
      ReplaySearch: number;
      ReplaySetState: number;
      ReloadTextures: number;
      ChatComand: number;
      PitCommand: number;
      TelemCommand: number;
      FFBCommand: number;
      ReplaySearchSessionTime: number;
    };
  
    export const CameraState: {
      IsSessionScreen: number;
      IsScenicActive: number;
      CamToolActive: number;
      UIHidden: number;
      UseAutoShotSelection: number;
      UseTemporaryEdits: number;
      UseKeyAcceleration: number;
      UseKey10xAcceleration: number;
      UseMouseAimMode: number;
    };
  
    export const RpyPosMode: {
      Begin: number;
      Current: number;
      End: number;
    };
  
    export const RpySrchMode: {
      ToStart: number;
      ToEnd: number;
      PrevSession: number;
      NextSession: number;
      PrevLap: number;
      NextLap: number;
      PrevFrame: number;
      NextFrame: number;
      PrevIncident: number;
      NextIncident: number;
    };
  
    export const RpyStateMode: {
      EraseTape: number;
    };
  
    export const ReloadTexturesMode: {
      All: number;
      CarIdx: number;
    };
  
    export const ChatCommand: {
      Macro: number;
      BeginChat: number;
      Reply: number;
      Cancel: number;
    };
  
    export const PitCommand: {
      Clear: number;
      WS: number;
      Fuel: number;
      LF: number;
      RF: number;
      LR: number;
      RR: number;
      ClearTires: number;
      FR: number;
      ClearWS: number;
      ClearFR: number;
      ClearFuel: number;
    };
  
    export const TelemCommand: {
      Stop: number;
      Start: number;
      Restart: number;
    };
  
    export const CamFocusAt: {
      Incident: number;
      Leader: number;
      Exciting: number;
      Driver: number;
    };
  
    export const CamCameraState: {
      IsSessionScreen: number;
      IsScenicActive: number;
      CamToolActive: number;
      UIHidden: number;
      UseAutoShotSelection: number;
      UseTemporaryEdits: number;
      UseKeyAcceleration: number;
      UseKey10xAcceleration: number;
      UseMouseAimMode: number;
    };
  
    export const SessionState: {
      Invalid: number;
      GetInCar: number;
      Warmup: number;
      ParadeLaps: number;
      Racing: number;
      Checkered: number;
      CoolDown: number;
    };
  
    export const EngineWarnings: {
      waterTempWarning: number;
      fuelPressureWarning: number;
      oilPressureWarning: number;
      engineStalled: number;
      pitSpeedLimiter: number;
      revLimiterActive: number;
    };
  
    export const Flags: {
      checkered: number;
      white: number;
      green: number;
      yellow: number;
      red: number;
      blue: number;
      debris: number;
      crossed: number;
      yellowWaving: number;
      oneLapToGreen: number;
      greenHeld: number;
      tenToGo: number;
      fiveToGo: number;
      randomWaving: number;
      caution: number;
      cautionWaving: number;
      black: number;
      disqualify: number;
      servicible: number;
      furled: number;
      repair: number;
      startHidden: number;
      startReady: number;
      startSet: number;
      startGo: number;
    };
  
    export const PitSvFlags: {
      LFTireChange: number;
      RFTireChange: number;
      LRTireChange: number;
      RRTireChange: number;
      FuelFill: number;
      WindshieldTearoff: number;
      FastRepair: number;
    };
  }