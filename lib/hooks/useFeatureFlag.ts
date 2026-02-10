import { useFeatureGate } from '@statsig/react-bindings'

export function useFeatureFlag(flagName: string) {
  const { value: isEnabled } = useFeatureGate(flagName)
  
  return {
    isEnabled,
  }
}
