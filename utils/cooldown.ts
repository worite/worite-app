import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_SUBMISSION_KEY = 'last_submission_time';
const COOLDOWN_HOURS = 24;

export interface CooldownInfo {
  canSubmit: boolean;
  remainingTime: number; // milliseconds
  remainingHours: number;
  remainingMinutes: number;
  remainingSeconds: number;
}

export const saveLastSubmissionTime = async (): Promise<void> => {
  try {
    const now = Date.now();
    await AsyncStorage.setItem(LAST_SUBMISSION_KEY, now.toString());
  } catch (error) {
    console.error('Error saving last submission time:', error);
  }
};

export const getCooldownInfo = async (): Promise<CooldownInfo> => {
  try {
    const lastSubmissionTime = await AsyncStorage.getItem(LAST_SUBMISSION_KEY);
    
    if (!lastSubmissionTime) {
      return {
        canSubmit: true,
        remainingTime: 0,
        remainingHours: 0,
        remainingMinutes: 0,
        remainingSeconds: 0
      };
    }

    const lastTime = parseInt(lastSubmissionTime);
    const now = Date.now();
    const timeDiff = now - lastTime;
    const cooldownMs = COOLDOWN_HOURS * 60 * 60 * 1000; // 24 hours in milliseconds
    
    const remainingTime = Math.max(0, cooldownMs - timeDiff);
    const canSubmit = remainingTime === 0;

    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      canSubmit,
      remainingTime,
      remainingHours,
      remainingMinutes,
      remainingSeconds
    };
  } catch (error) {
    console.error('Error getting cooldown info:', error);
    return {
      canSubmit: true,
      remainingTime: 0,
      remainingHours: 0,
      remainingMinutes: 0,
      remainingSeconds: 0
    };
  }
};

export const formatTimeRemaining = (hours: number, minutes: number, seconds: number): string => {
  if (hours > 0) {
    return `${hours}s ${minutes}d ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}d ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}; 