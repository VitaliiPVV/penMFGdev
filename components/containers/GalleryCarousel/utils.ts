type ReachSide = 'none' | 'left' | 'right' | 'both';

interface MarginConfiguration {
  default: string;
  compensate: string;
  [key: string]: string; // Allow additional breakpoint keys like 'md', '2xl', etc.
}

export interface EdgeReachConfiguration {
  reachSide: ReachSide;
  marginConfigurations: Partial<Record<ReachSide, MarginConfiguration>>;
}

interface TWMarginConfiguration {
  leftMargin: string;
  rightMargin: string;
  leftCompensationMargin: string;
  rightCompensationMargin: string;
}

const combineMarginClasses = (config: MarginConfiguration): string => {
  const classes: string[] = [];
  Object.entries(config).forEach(([key, value]) => {
    if (key !== 'compensate' && value) {
      classes.push(value);
    }
  });
  return classes.join(' ');
};

export const computeTWMarginConfiguration = (configs?: EdgeReachConfiguration): TWMarginConfiguration => {
  if (!configs || configs?.reachSide === 'none') {
    return {
      leftMargin: '',
      rightMargin: '',
      leftCompensationMargin: '',
      rightCompensationMargin: '',
    };
  }

  const leftMargin =
    (configs.reachSide === 'left' || configs.reachSide === 'both') && configs.marginConfigurations['left']
      ? combineMarginClasses(configs.marginConfigurations['left'])
      : '';
  const rightMargin =
    (configs.reachSide === 'right' || configs.reachSide === 'both') && configs.marginConfigurations['right']
      ? combineMarginClasses(configs.marginConfigurations['right'])
      : '';
  const leftCompensationMargin =
    (configs.reachSide === 'left' || configs.reachSide === 'both') && configs.marginConfigurations['left']
      ? configs.marginConfigurations['left'].compensate
      : '';
  const rightCompensationMargin =
    (configs.reachSide === 'right' || configs.reachSide === 'both') && configs.marginConfigurations['right']
      ? configs.marginConfigurations['right'].compensate
      : '';

  return {
    leftMargin,
    rightMargin,
    leftCompensationMargin,
    rightCompensationMargin,
  };
};
