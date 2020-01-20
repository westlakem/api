import { OffsetList } from '@shared/offset-list';

import { positionAttitude } from './position-attitude/position-attitude';
import { simulation } from './simulation/simulation';
import { runway } from './airport/runway';
import { pushback } from './airport/pushback';
import { environment } from './environment/environment';
import { weather } from './environment/weather';
import { plane } from './plane/plane';
import { controls } from './plane/controls';
import { cockpit } from './plane/cockpit';
import { radios } from './plane/radios';
import { pressurisation } from './plane/pressurisation';
import { icing } from './plane/icing';
import { engines } from './plane/engines';
import { autopilot } from './plane/autopilot';

export const OFFSETS: OffsetList  = {
  // Position and Attitude
  ...positionAttitude,

  // Simulation
  ...simulation,

  // Airport
  ...pushback,
  ...runway,

  // Environment
  ...environment,
  ...weather,

  // Plane
  ...plane,
  ...controls,
  ...cockpit,
  ...radios,
  ...pressurisation,
  ...icing,
  ...engines,
  ...autopilot,
};

export * from './airport/runway';
export * from './airport/pushback';
export * from './environment/environment';
export * from './environment/weather';
export * from './position-attitude/position-attitude';
export * from './plane/plane';
export * from './plane/controls';
export * from './plane/cockpit';
export * from './plane/radios';
export * from './plane/pressurisation';
export * from './plane/icing';
export * from './plane/engines';
export * from './plane/autopilot';
export * from './simulation/simulation';